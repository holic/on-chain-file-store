/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  FileStore,
  FileStoreInterface,
} from "../../FileStore.sol/FileStore";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    name: "ChunkExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    name: "ChunkNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "ChunkTooBig",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyFile",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_end",
        type: "uint256",
      },
    ],
    name: "InvalidCodeAtRange",
    type: "error",
  },
  {
    inputs: [],
    name: "WriteError",
    type: "error",
  },
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
      {
        indexed: false,
        internalType: "string",
        name: "contentType",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "contentEncoding",
        type: "string",
      },
    ],
    name: "NewFile",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_checksums",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "_chunks",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    name: "checksumExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    name: "chunkSize",
    outputs: [
      {
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "checksums",
        type: "bytes32[]",
      },
    ],
    name: "readBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    name: "readChunk",
    outputs: [
      {
        internalType: "bytes",
        name: "chunk",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "checksums",
        type: "bytes32[]",
      },
    ],
    name: "readChunks",
    outputs: [
      {
        internalType: "bytes[]",
        name: "chunks",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    name: "readFile",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "contentType",
            type: "string",
          },
          {
            internalType: "string",
            name: "contentEncoding",
            type: "string",
          },
          {
            internalType: "bytes32[]",
            name: "checksums",
            type: "bytes32[]",
          },
        ],
        internalType: "struct File",
        name: "file",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "contentType",
            type: "string",
          },
          {
            internalType: "string",
            name: "contentEncoding",
            type: "string",
          },
          {
            internalType: "bytes32[]",
            name: "checksums",
            type: "bytes32[]",
          },
        ],
        internalType: "struct File",
        name: "file",
        type: "tuple",
      },
    ],
    name: "readFileData",
    outputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    name: "readFileData",
    outputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "chunk",
        type: "bytes",
      },
    ],
    name: "writeChunk",
    outputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "chunks",
        type: "bytes[]",
      },
    ],
    name: "writeChunks",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "fileChecksums",
        type: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "contentType",
        type: "string",
      },
      {
        internalType: "string",
        name: "contentEncoding",
        type: "string",
      },
      {
        internalType: "bytes32[]",
        name: "checksums",
        type: "bytes32[]",
      },
    ],
    name: "writeFile",
    outputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "contentType",
            type: "string",
          },
          {
            internalType: "string",
            name: "contentEncoding",
            type: "string",
          },
          {
            internalType: "bytes32[]",
            name: "checksums",
            type: "bytes32[]",
          },
        ],
        internalType: "struct File",
        name: "file",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "contentType",
        type: "string",
      },
      {
        internalType: "string",
        name: "contentEncoding",
        type: "string",
      },
      {
        internalType: "bytes[]",
        name: "chunks",
        type: "bytes[]",
      },
    ],
    name: "writeFile",
    outputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "contentType",
            type: "string",
          },
          {
            internalType: "string",
            name: "contentEncoding",
            type: "string",
          },
          {
            internalType: "bytes32[]",
            name: "checksums",
            type: "bytes32[]",
          },
        ],
        internalType: "struct File",
        name: "file",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611345806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063746da1e71161008c578063a1eb26f311610066578063a1eb26f314610216578063bea751f414610229578063cb47080314610249578063f97406f71461026957600080fd5b8063746da1e7146101dd57806386cbfc7c146101f0578063957c28d71461020357600080fd5b8063266c235a116100c8578063266c235a146101685780633a72a9c4146101895780634cfbb2de146101a95780636fba0bf5146101bc57600080fd5b806305c1deda146100ef5780631a49cfca146101355780631c2414d414610155575b600080fd5b6101186100fd366004610a59565b6000602081905290815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b610148610143366004610be6565b6102a4565b60405161012c9190610cfc565b610148610163366004610a59565b6102be565b61017b610176366004610d0f565b61031f565b60405161012c929190610e11565b61019c610197366004610a59565b610459565b60405161012c9190610e32565b6101486101b7366004610a59565b6104a0565b6101cf6101ca366004610e45565b6104ae565b60405190815260200161012c565b6101486101eb366004610e79565b6105bb565b61017b6101fe366004610f3e565b610636565b6101cf610211366004610a59565b61067d565b6101cf610224366004610a59565b6106da565b61023c610237366004610fbb565b6106fb565b60405161012c9190610fef565b61025c610257366004611033565b6107a5565b60405161012c9190611067565b610294610277366004610a59565b6000908152602081905260409020546001600160a01b0316151590565b604051901515815260200161012c565b60606102b8826000015183606001516105bb565b92915050565b6000818152602081905260409020546060906001600160a01b03166102fe576040516316fcd95f60e11b8152600481018390526024015b60405180910390fd5b6000828152602081905260409020546102b8906001600160a01b0316610847565b600061034c6040518060800160405280600081526020016060815260200160608152602001606081525090565b6000805b84518110156103995761037b85828151811061036e5761036e6110c9565b602002602001015161067d565b61038590836110f5565b9150806103918161110d565b915050610350565b50806000036103bb5760405163067b6a0f60e01b815260040160405180910390fd5b6040518060800160405280828152602001878152602001868152602001858152509150610406826040516020016103f29190610e32565b6040516020818303038152906040526104ae565b9250827f781d09314f163fac6f270ad8ff8282008540d3ce7baccdafa9dbbc1fea63eb2483600001518460200151856040015160405161044893929190611126565b60405180910390a250935093915050565b6104846040518060800160405280600081526020016060815260200160608152602001606081525090565b61048d826102be565b8060200190518101906102b891906111fb565b60606102b861014383610459565b6000615fff825111156104d4576040516388c92e2760e01b815260040160405180910390fd5b5080516020808301919091206000818152918290526040909120546001600160a01b03161561051957604051634fd1e20760e01b8152600481018290526024016102f5565b61052282610857565b60008281526020818152604080832080546001600160a01b0319166001600160a01b03959095169490941790935560018054808201825592527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf69091018390558351915191825282917f277eb4123d86c9731f85aaee94623cc5ac9b8e1f593faa1e2bc1a3aa2d27d772910160405180910390a2919050565b60606105de83604080518281016060018252910181526000602090910190815290565b905060005b825181101561062f576000610610848381518110610603576106036110c9565b60200260200101516102be565b905061061c83826108b6565b50806106278161110d565b9150506105e3565b5092915050565b60006106636040518060800160405280600081526020016060815260200160608152602001606081525090565b6106718585610176866106fb565b91509150935093915050565b6000818152602081905260408120546001600160a01b03166106b5576040516316fcd95f60e11b8152600481018390526024016102f5565b6000828152602081905260409020546102b8906001906001600160a01b03163b6112aa565b600181815481106106ea57600080fd5b600091825260209091200154905081565b606081516001600160401b0381111561071657610716610a72565b60405190808252806020026020018201604052801561073f578160200160208202803683370190505b50905060005b825181101561079f57610770838281518110610763576107636110c9565b60200260200101516104ae565b828281518110610782576107826110c9565b6020908102919091010152806107978161110d565b915050610745565b50919050565b606081516001600160401b038111156107c0576107c0610a72565b6040519080825280602002602001820160405280156107f357816020015b60608152602001906001900390816107de5790505b50905060005b825181101561079f57610817838281518110610603576106036110c9565b828281518110610829576108296110c9565b6020026020010181905250808061083f9061110d565b9150506107f9565b60606102b8826001600019610941565b6000806108828360405160200161086e91906112c1565b6040516020818303038152906040526109f7565b90508051602082016000f091506001600160a01b03821661079f5760405163046a55db60e11b815260040160405180910390fd5b601f1982015182518251603f199092019182906108d390836110f5565b11156109315760405162461bcd60e51b815260206004820152602760248201527f44796e616d69634275666665723a20417070656e64696e67206f7574206f66206044820152663137bab732399760c91b60648201526084016102f5565b61093b8484610a23565b50505050565b6060833b60008190036109645750506040805160208101909152600081526109f0565b808411156109825750506040805160208101909152600081526109f0565b838310156109b45760405163162544fd60e11b81526004810182905260248101859052604481018490526064016102f5565b83830384820360008282106109c957826109cb565b815b60408051603f8301601f19168101909152818152955090508087602087018a3c505050505b9392505050565b6060815182604051602001610a0d9291906112e7565b6040516020818303038152906040529050919050565b8051602082019150808201602084510184015b81841015610a4e578351815260209384019301610a36565b505082510190915250565b600060208284031215610a6b57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b0381118282101715610aaa57610aaa610a72565b60405290565b604051601f8201601f191681016001600160401b0381118282101715610ad857610ad8610a72565b604052919050565b60006001600160401b03821115610af957610af9610a72565b50601f01601f191660200190565b600082601f830112610b1857600080fd5b8135610b2b610b2682610ae0565b610ab0565b818152846020838601011115610b4057600080fd5b816020850160208301376000918101602001919091529392505050565b60006001600160401b03821115610b7657610b76610a72565b5060051b60200190565b600082601f830112610b9157600080fd5b81356020610ba1610b2683610b5d565b82815260059290921b84018101918181019086841115610bc057600080fd5b8286015b84811015610bdb5780358352918301918301610bc4565b509695505050505050565b600060208284031215610bf857600080fd5b81356001600160401b0380821115610c0f57600080fd5b9083019060808286031215610c2357600080fd5b610c2b610a88565b82358152602083013582811115610c4157600080fd5b610c4d87828601610b07565b602083015250604083013582811115610c6557600080fd5b610c7187828601610b07565b604083015250606083013582811115610c8957600080fd5b610c9587828601610b80565b60608301525095945050505050565b60005b83811015610cbf578181015183820152602001610ca7565b8381111561093b5750506000910152565b60008151808452610ce8816020860160208601610ca4565b601f01601f19169290920160200192915050565b6020815260006109f06020830184610cd0565b600080600060608486031215610d2457600080fd5b83356001600160401b0380821115610d3b57600080fd5b610d4787838801610b07565b94506020860135915080821115610d5d57600080fd5b610d6987838801610b07565b93506040860135915080821115610d7f57600080fd5b50610d8c86828701610b80565b9150509250925092565b805182526000602080830151608082860152610db56080860182610cd0565b905060408401518582036040870152610dce8282610cd0565b606086810151888303918901919091528051808352908501935060009250908401905b80831015610bdb5783518252928401926001929092019190840190610df1565b828152604060208201526000610e2a6040830184610d96565b949350505050565b6020815260006109f06020830184610d96565b600060208284031215610e5757600080fd5b81356001600160401b03811115610e6d57600080fd5b610e2a84828501610b07565b60008060408385031215610e8c57600080fd5b8235915060208301356001600160401b03811115610ea957600080fd5b610eb585828601610b80565b9150509250929050565b600082601f830112610ed057600080fd5b81356020610ee0610b2683610b5d565b82815260059290921b84018101918181019086841115610eff57600080fd5b8286015b84811015610bdb5780356001600160401b03811115610f225760008081fd5b610f308986838b0101610b07565b845250918301918301610f03565b600080600060608486031215610f5357600080fd5b83356001600160401b0380821115610f6a57600080fd5b610f7687838801610b07565b94506020860135915080821115610f8c57600080fd5b610f9887838801610b07565b93506040860135915080821115610fae57600080fd5b50610d8c86828701610ebf565b600060208284031215610fcd57600080fd5b81356001600160401b03811115610fe357600080fd5b610e2a84828501610ebf565b6020808252825182820181905260009190848201906040850190845b818110156110275783518352928401929184019160010161100b565b50909695505050505050565b60006020828403121561104557600080fd5b81356001600160401b0381111561105b57600080fd5b610e2a84828501610b80565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156110bc57603f198886030184526110aa858351610cd0565b9450928501929085019060010161108e565b5092979650505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611108576111086110df565b500190565b60006001820161111f5761111f6110df565b5060010190565b83815260606020820152600061113f6060830185610cd0565b82810360408401526111518185610cd0565b9695505050505050565b600082601f83011261116c57600080fd5b815161117a610b2682610ae0565b81815284602083860101111561118f57600080fd5b610e2a826020830160208701610ca4565b600082601f8301126111b157600080fd5b815160206111c1610b2683610b5d565b82815260059290921b840181019181810190868411156111e057600080fd5b8286015b84811015610bdb57805183529183019183016111e4565b60006020828403121561120d57600080fd5b81516001600160401b038082111561122457600080fd5b908301906080828603121561123857600080fd5b611240610a88565b8251815260208301518281111561125657600080fd5b6112628782860161115b565b60208301525060408301518281111561127a57600080fd5b6112868782860161115b565b60408301525060608301518281111561129e57600080fd5b610c95878286016111a0565b6000828210156112bc576112bc6110df565b500390565b60008152600082516112da816001850160208701610ca4565b9190910160010192915050565b606360f81b815260e083901b6001600160e01b03191660018201526880600e6000396000f360b81b6005820152815160009061132a81600e850160208701610ca4565b91909101600e01939250505056fea164736f6c634300080d000a";

type FileStoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FileStoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FileStore__factory extends ContractFactory {
  constructor(...args: FileStoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FileStore> {
    return super.deploy(overrides || {}) as Promise<FileStore>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FileStore {
    return super.attach(address) as FileStore;
  }
  override connect(signer: Signer): FileStore__factory {
    return super.connect(signer) as FileStore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FileStoreInterface {
    return new utils.Interface(_abi) as FileStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FileStore {
    return new Contract(address, _abi, signerOrProvider) as FileStore;
  }
}
