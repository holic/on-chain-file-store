"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IChunkStore__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "size",
                type: "uint256",
            },
        ],
        name: "NewChunk",
        type: "event",
    },
];
class IChunkStore__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IChunkStore__factory = IChunkStore__factory;
IChunkStore__factory.abi = _abi;
