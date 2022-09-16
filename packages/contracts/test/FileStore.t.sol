// SPDX-License-Identifier: CC0-1.0
pragma solidity >=0.8.10 <0.9.0;

import "forge-std/Test.sol";
import "../src/FileStore.sol";

contract FileStoreTest is Test, IFileStore {
    FileStore private fileStore;

    error FileDoesNotExist(string filename);

    function setUp() public {
        fileStore = new FileStore();
    }

    function slice(
        string memory str,
        uint256 startIndex,
        uint256 endIndex
    ) public pure returns (string memory) {
        bytes memory strBytes = bytes(str);
        bytes memory result = new bytes(endIndex - startIndex);
        for (uint256 i = startIndex; i < endIndex; i++) {
            result[i - startIndex] = strBytes[i];
        }
        return string(result);
    }

    function testWrite() public {
        bytes memory data = bytes(
            vm.readFile("packages/contracts/test/files/24kb-1.txt")
        );
        bytes32 checksum = keccak256(data);

        assertFalse(
            fileStore.checksumExists(checksum),
            "expected checksum to not exist"
        );

        vm.expectEmit(true, true, true, true);
        emit NewChunk(checksum, data.length);

        fileStore.writeChunk(data);

        assertTrue(
            fileStore.checksumExists(checksum),
            "expected checksum to exist"
        );

        bytes memory storedData = fileStore.readChunk(checksum);

        assertEq(data, storedData, "expected data to match");
        assertEq(
            checksum,
            keccak256(storedData),
            "expected checksums to match"
        );
    }

    function testWriteTooBig() public {
        vm.expectRevert(abi.encodeWithSelector(FileStore.ChunkTooBig.selector));
        fileStore.writeChunk(
            bytes(vm.readFile("packages/contracts/test/files/24kb.txt"))
        );
    }

    function testReadFileData() public {
        bytes32[] memory checksums = new bytes32[](3);
        checksums[0] = fileStore.writeChunk("hello");
        checksums[1] = fileStore.writeChunk(" ");
        checksums[2] = fileStore.writeChunk("world");

        File memory file = File({
            size: 0,
            contentType: "text/plain",
            contentEncoding: "",
            checksums: checksums
        });
        bytes32 fileChecksum = fileStore.writeFile(file);

        assertEq("hello world", fileStore.readFileData(fileChecksum));
    }

    function testReadFileDataBig() public {
        bytes memory data = bytes(
            vm.readFile("packages/contracts/test/files/24kb-1.txt")
        );

        vm.expectEmit(true, true, true, true);
        emit NewChunk(keccak256(data), data.length);
        bytes32 checksum = fileStore.writeChunk(data);

        bytes32[] memory checksums = new bytes32[](2);
        checksums[0] = checksum;
        checksums[1] = checksum;

        File memory file = File({
            size: data.length + data.length,
            contentType: "text/plain",
            contentEncoding: "",
            checksums: checksums
        });

        vm.expectEmit(true, true, true, true);
        emit NewFile(keccak256(abi.encode(file)), file.size, "text/plain", "");
        bytes32 fileChecksum = fileStore.writeFile(file);

        vm.expectRevert(
            abi.encodeWithSelector(
                FileStore.ChunkExists.selector,
                keccak256(abi.encode(file))
            )
        );
        fileStore.writeFile(file);

        assertEq(
            bytes(vm.readFile("packages/contracts/test/files/48kb-2.txt")),
            fileStore.readFileData(fileChecksum)
        );
    }
}
