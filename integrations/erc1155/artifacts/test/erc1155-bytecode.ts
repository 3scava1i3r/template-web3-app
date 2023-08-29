/**
 * Test Bytecode for ERC1155 contract generated using SolidState Solidity Contract
 * https://github.com/solidstate-network/solidstate-solidity
 *
 * Features:
 * - Mintable
 * - Enumerable
 * - Single Approve
 * - No Contructor Params
 *
 * Access Control:
 * - Ownable
 */
export const erc1155ByteCode =
  "0x60806040523480156200001157600080fd5b506200003262000026620001e360201b60201c565b620001eb60201b60201c565b60405180606001604052806036815260200162004cd360369139600390816200005c919062000e11565b506040518060400160405280600f81526020017f506f6e792047616d65204974656d73000000000000000000000000000000000081525060049081620000a3919062000e11565b506040518060400160405280600581526020017f504974656d00000000000000000000000000000000000000000000000000000081525060059081620000ea919062000e11565b506200010f3360018060405180602001604052806000815250620002af60201b60201c565b6200013b60016040518060600160405280603a815260200162004c5f603a91396200045360201b60201c565b62000160336002600560405180602001604052806000815250620002af60201b60201c565b6200018c60026040518060600160405280603a815260200162004c25603a91396200045360201b60201c565b620001b1336003606460405180602001604052806000815250620002af60201b60201c565b620001dd60036040518060600160405280603a815260200162004c99603a91396200045360201b60201c565b62001039565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160362000316576040517f0391df7e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6200034d336000866200032f876200047a60201b60201c565b62000340876200047a60201b60201c565b86620004fb60201b60201c565b81620003636200051e60201b62000f7a1760201c565b600001600085815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620003c5919062000f27565b925050819055508373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6286866040516200044592919062000f73565b60405180910390a450505050565b8060026000848152602001908152602001600020908162000475919062000e11565b505050565b60606000600167ffffffffffffffff8111156200049c576200049b62000ba2565b5b604051908082528060200260200182016040528015620004cb5781602001602082028036833780820191505090505b5090508281600081518110620004e657620004e562000fa0565b5b60200260200101818152505080915050919050565b620005168686868686866200054b60201b62000fa71760201c565b505050505050565b6000807f1799cf914cb0cb442ca7c7ac709ee40d0cb89e87351dc08d517fbda27d50c68b90508091505090565b620005668686868686866200085660201b620012581760201c565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16146200084e576000620005b16200085e60201b620012601760201c565b9050600081600101905060008260020160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008360020160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060005b8751811015620008485760008782815181106200066a576200066962000fa0565b5b6020026020010151905060008111156200083957600089838151811062000696576200069562000fa0565b5b60200260200101519050600073ffffffffffffffffffffffffffffffffffffffff168c73ffffffffffffffffffffffffffffffffffffffff16036200070957818760000160008381526020019081526020016000206000828254620006fc919062000f27565b925050819055506200076b565b816200071c8d836200088b60201b60201c565b036200076a576200074d8c8760008481526020019081526020016000206200096260201b6200128d1790919060201c565b506200076881866200099a60201b620012bd1790919060201c565b505b5b600073ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff1603620007d457818760000160008381526020019081526020016000206000828254620007c7919062000fcf565b9250508190555062000837565b6000620007e88c836200088b60201b60201c565b036200083657620008198b876000848152602001908152602001600020620009bc60201b620012d71790919060201c565b50620008348185620009f460201b620013071790919060201c565b505b5b505b81806001019250505062000648565b50505050505b505050505050565b505050505050565b6000807fb31c2c74f86ca3ce94d901f5f5bbe66f7161eec2f7b5aa0b75a86371436424ea90508091505090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620008f3576040517fdb5d879700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b620009086200051e60201b62000f7a1760201c565b600001600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600062000992836000018373ffffffffffffffffffffffffffffffffffffffff1660001b62000a1660201b60201c565b905092915050565b6000620009b4836000018360001b62000a1660201b60201c565b905092915050565b6000620009ec836000018373ffffffffffffffffffffffffffffffffffffffff1660001b62000b0460201b60201c565b905092915050565b600062000a0e836000018360001b62000b0460201b60201c565b905092915050565b6000808360010160008481526020019081526020016000205490506000811462000afd5760008460000160018660000180549050038154811062000a5f5762000a5e62000fa0565b5b906000526020600020015490508085600001600184038154811062000a895762000a8862000fa0565b5b90600052602060002001819055508185600101600083815260200190815260200160002081905550508360000180548062000ac95762000ac86200100a565b5b6001900381819060005260206000200160009055905583600101600084815260200190815260200160002060009055600191505b5092915050565b600062000b18838362000b7460201b60201c565b62000b6e5782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000c1957607f821691505b60208210810362000c2f5762000c2e62000bd1565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830262000c997fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000c5a565b62000ca5868362000c5a565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000cf262000cec62000ce68462000cbd565b62000cc7565b62000cbd565b9050919050565b6000819050919050565b62000d0e8362000cd1565b62000d2662000d1d8262000cf9565b84845462000c67565b825550505050565b600090565b62000d3d62000d2e565b62000d4a81848462000d03565b505050565b5b8181101562000d725762000d6660008262000d33565b60018101905062000d50565b5050565b601f82111562000dc15762000d8b8162000c35565b62000d968462000c4a565b8101602085101562000da6578190505b62000dbe62000db58562000c4a565b83018262000d4f565b50505b505050565b600082821c905092915050565b600062000de66000198460080262000dc6565b1980831691505092915050565b600062000e01838362000dd3565b9150826002028217905092915050565b62000e1c8262000b97565b67ffffffffffffffff81111562000e385762000e3762000ba2565b5b62000e44825462000c00565b62000e5182828562000d76565b600060209050601f83116001811462000e89576000841562000e74578287015190505b62000e80858262000df3565b86555062000ef0565b601f19841662000e998662000c35565b60005b8281101562000ec35784890151825560018201915060208501945060208101905062000e9c565b8683101562000ee3578489015162000edf601f89168262000dd3565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000f348262000cbd565b915062000f418362000cbd565b925082820190508082111562000f5c5762000f5b62000ef8565b5b92915050565b62000f6d8162000cbd565b82525050565b600060408201905062000f8a600083018562000f62565b62000f99602083018462000f62565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600062000fdc8262000cbd565b915062000fe98362000cbd565b925082820390508181111562001004576200100362000ef8565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b613bdc80620010496000396000f3fe608060405234801561001057600080fd5b50600436106101725760003560e01c8063715018a6116100de578063bd85b03911610097578063e8a3d48511610071578063e8a3d48514610471578063e985e9c51461048f578063f242432a146104bf578063f2fde38b146104db57610172565b8063bd85b03914610405578063c98d8f6214610435578063e10147941461045357610172565b8063715018a61461035757806385bff2e7146103615780638da5cb5b1461039157806395d89b41146103af578063a22cb465146103cd578063bb7fde71146103e957610172565b80631f7fdffa116101305780631f7fdffa146102735780632eb2c2d61461028f578063426a8493146102ab5780634e1273f4146102c7578063598af9e7146102f75780636dcfd8411461032757610172565b8062fdd58e1461017757806301ffc9a7146101a757806306fdde03146101d75780630e89341c146101f557806313ba55df146102255780631f4d0f5114610255575b600080fd5b610191600480360381019061018c9190612873565b6104f7565b60405161019e91906128c2565b60405180910390f35b6101c160048036038101906101bc9190612935565b61050b565b6040516101ce919061297d565b60405180910390f35b6101df61051d565b6040516101ec9190612a28565b60405180910390f35b61020f600480360381019061020a9190612a4a565b6105af565b60405161021c9190612a28565b60405180910390f35b61023f600480360381019061023a9190612a4a565b610654565b60405161024c91906128c2565b60405180910390f35b61025d610666565b60405161026a91906128c2565b60405180910390f35b61028d60048036038101906102889190612c74565b61066b565b005b6102a960048036038101906102a49190612d2f565b610685565b005b6102c560048036038101906102c09190612dfe565b610714565b005b6102e160048036038101906102dc9190612f14565b610811565b6040516102ee919061304a565b60405180910390f35b610311600480360381019061030c919061306c565b6109f3565b60405161031e91906128c2565b60405180910390f35b610341600480360381019061033c9190612a4a565b610a8c565b60405161034e919061317d565b60405180910390f35b61035f610a9e565b005b61037b6004803603810190610376919061319f565b610ab2565b604051610388919061304a565b60405180910390f35b610399610ac4565b6040516103a691906131db565b60405180910390f35b6103b7610aed565b6040516103c49190612a28565b60405180910390f35b6103e760048036038101906103e29190613222565b610b7f565b005b61040360048036038101906103fe9190613303565b610cea565b005b61041f600480360381019061041a9190612a4a565b610d1d565b60405161042c91906128c2565b60405180910390f35b61043d610d2f565b60405161044a91906128c2565b60405180910390f35b61045b610d34565b60405161046891906128c2565b60405180910390f35b610479610d39565b6040516104869190612a28565b60405180910390f35b6104a960048036038101906104a49190613386565b610dcb565b6040516104b6919061297d565b60405180910390f35b6104d960048036038101906104d491906133c6565b610e68565b005b6104f560048036038101906104f0919061319f565b610ef7565b005b60006105038383611321565b905092915050565b6000610516826113ea565b9050919050565b60606004805461052c9061348c565b80601f01602080910402602001604051908101604052809291908181526020018280546105589061348c565b80156105a55780601f1061057a576101008083540402835291602001916105a5565b820191906000526020600020905b81548152906001019060200180831161058857829003601f168201915b5050505050905090565b60606002600083815260200190815260200160002080546105cf9061348c565b80601f01602080910402602001604051908101604052809291908181526020018280546105fb9061348c565b80156106485780601f1061061d57610100808354040283529160200191610648565b820191906000526020600020905b81548152906001019060200180831161062b57829003601f168201915b50505050509050919050565b600061065f8261145b565b9050919050565b600381565b610673611488565b61067f84848484611506565b50505050565b3373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141580156106c857506106c68533610dcb565b155b156106ff576040517f25dfda0000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61070d3386868686866116ff565b5050505050565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550818373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fb3fd5071835887567a0671151121894ddccc2842f1d10bedad13e0d17cace9a78460405161080491906128c2565b60405180910390a4505050565b6060815183511461084e576040517f7cfc16da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610858610f7a565b60000190506000845167ffffffffffffffff81111561087a57610879612a7c565b5b6040519080825280602002602001820160405280156108a85781602001602082028036833780820191505090505b50905060005b85518110156109e757600073ffffffffffffffffffffffffffffffffffffffff168682815181106108e2576108e16134bd565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1603610937576040517fdb5d879700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82600086838151811061094d5761094c6134bd565b5b602002602001015181526020019081526020016000206000878381518110610978576109776134bd565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548282815181106109ce576109cd6134bd565b5b60200260200101818152505080806001019150506108ae565b50809250505092915050565b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000205490509392505050565b6060610a9782611723565b9050919050565b610aa6611488565b610ab06000611825565b565b6060610abd826118e9565b9050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060058054610afc9061348c565b80601f0160208091040260200160405190810160405280929190818152602001828054610b289061348c565b8015610b755780601f10610b4a57610100808354040283529160200191610b75565b820191906000526020600020905b815481529060010190602001808311610b5857829003601f168201915b5050505050905090565b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1603610be4576040517ff661526600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80610bed610f7a565b60010160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610cde919061297d565b60405180910390a35050565b610cf2611488565b610d0d848484604051806020016040528060008152506119e9565b610d178382611b63565b50505050565b6000610d2882611b88565b9050919050565b600181565b600281565b606060038054610d489061348c565b80601f0160208091040260200160405190810160405280929190818152602001828054610d749061348c565b8015610dc15780601f10610d9657610100808354040283529160200191610dc1565b820191906000526020600020905b815481529060010190602001808311610da457829003601f168201915b5050505050905090565b6000610dd5610f7a565b60010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b3373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614158015610eab5750610ea98533610dcb565b155b15610ee2576040517f25dfda0000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ef0338686868686611bae565b5050505050565b610eff611488565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610f6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f659061355e565b60405180910390fd5b610f7781611825565b50565b6000807f1799cf914cb0cb442ca7c7ac709ee40d0cb89e87351dc08d517fbda27d50c68b90508091505090565b610fb5868686868686611258565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611250576000610ff2611260565b9050600081600101905060008260020160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008360020160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060005b875181101561124a5760008782815181106110a7576110a66134bd565b5b60200260200101519050600081111561123c5760008983815181106110cf576110ce6134bd565b5b60200260200101519050600073ffffffffffffffffffffffffffffffffffffffff168c73ffffffffffffffffffffffffffffffffffffffff160361113e5781876000016000838152602001908152602001600020600082825461113291906135ad565b92505081905550611189565b816111498d83611321565b03611188576111728c87600084815260200190815260200160002061128d90919063ffffffff16565b5061118681866112bd90919063ffffffff16565b505b5b600073ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff16036111ee578187600001600083815260200190815260200160002060008282546111e291906135e1565b9250508190555061123a565b60006111fa8c83611321565b03611239576112238b8760008481526020019081526020016000206112d790919063ffffffff16565b50611237818561130790919063ffffffff16565b505b5b505b818060010192505050611089565b50505050505b505050505050565b505050505050565b6000807fb31c2c74f86ca3ce94d901f5f5bbe66f7161eec2f7b5aa0b75a86371436424ea90508091505090565b60006112b5836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611bd2565b905092915050565b60006112cf836000018360001b611bd2565b905092915050565b60006112ff836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611cb6565b905092915050565b6000611319836000018360001b611cb6565b905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611388576040517fdb5d879700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611390610f7a565b600001600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60006113f4611d1d565b6000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6000611481611468611260565b6001016000848152602001908152602001600020611d4a565b9050919050565b611490611d5f565b73ffffffffffffffffffffffffffffffffffffffff166114ae610ac4565b73ffffffffffffffffffffffffffffffffffffffff1614611504576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114fb90613661565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361156c576040517f0391df7e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81518351146115a7576040517f7cfc16da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115b633600086868686611d67565b60006115c0610f7a565b600001905060005b8451811015611678578381815181106115e4576115e36134bd565b5b6020026020010151826000878481518110611602576116016134bd565b5b6020026020010151815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461166491906135ad565b9250508190555080806001019150506115c8565b508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516116f0929190613681565b60405180910390a45050505050565b61170d868686868686611d7d565b61171b868686868686612067565b505050505050565b6060600061172f611260565b60010160008481526020019081526020016000209050600061175082611d4a565b67ffffffffffffffff81111561176957611768612a7c565b5b6040519080825280602002602001820160405280156117975781602001602082028036833780820191505090505b50905060005b6117a683611d4a565b81101561181a576117c0818461222c90919063ffffffff16565b8282815181106117d3576117d26134bd565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050808060010191505061179d565b508092505050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b606060006118f5611260565b60020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600061194282612246565b67ffffffffffffffff81111561195b5761195a612a7c565b5b6040519080825280602002602001820160405280156119895781602001602082028036833780820191505090505b50905060005b61199883612246565b8110156119de576119b2818461225b90919063ffffffff16565b8282815181106119c5576119c46134bd565b5b602002602001018181525050808060010191505061198f565b508092505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611a4f576040517f0391df7e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611a6e33600086611a5f87612275565b611a6887612275565b86611d67565b81611a77610f7a565b600001600085815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611ad791906135ad565b925050819055508373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628686604051611b559291906136b8565b60405180910390a450505050565b80600260008481526020019081526020016000209081611b83919061388d565b505050565b6000611b92611260565b6000016000838152602001908152602001600020549050919050565b611bbc8686868686866122ef565b611bca868686868686612554565b505050505050565b60008083600101600084815260200190815260200160002054905060008114611caf57600084600001600186600001805490500381548110611c1757611c166134bd565b5b9060005260206000200154905080856000016001840381548110611c3e57611c3d6134bd565b5b906000526020600020018190555081856001016000838152602001908152602001600020819055505083600001805480611c7b57611c7a61395f565b5b6001900381819060005260206000200160009055905583600101600084815260200190815260200160002060009055600191505b5092915050565b6000611cc28383612719565b611d175782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190505b92915050565b6000807ffc606c433378e3a7e0a6a531deac289b66caa1b4aa8554fd4ab2c6f1570f92d890508091505090565b6000611d588260000161273c565b9050919050565b600033905090565b611d75868686868686610fa7565b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611de3576040517ff5cadad500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8151835114611e1e576040517f7cfc16da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e2c868686868686611d67565b6000611e36610f7a565b600001905060005b8451811015611fdf576000858281518110611e5c57611e5b6134bd565b5b602002602001015190506000858381518110611e7b57611e7a6134bd565b5b60200260200101519050600084600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080821115611f13576040517f8cd635d800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81810385600085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508380600101945050508084600084815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611fd191906135ad565b925050819055505050611e3e565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051612056929190613681565b60405180910390a450505050505050565b6120868473ffffffffffffffffffffffffffffffffffffffff1661274d565b15612224578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b81526004016120cc9594939291906139e3565b6020604051808303816000875af192505050801561210857506040513d601f19601f820116820180604052508101906121059190613a60565b60015b6121a457612114613a9a565b806308c379a0036121705750612128613abc565b806121335750612172565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121679190612a28565b60405180910390fd5b505b6040517f380147a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614612222576040517f3744db2900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b505050505050565b600061223b8360000183612760565b60001c905092915050565b60006122548260000161273c565b9050919050565b600061226a8360000183612760565b60001c905092915050565b60606000600167ffffffffffffffff81111561229457612293612a7c565b5b6040519080825280602002602001820160405280156122c25781602001602082028036833780820191505090505b50905082816000815181106122da576122d96134bd565b5b60200260200101818152505080915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603612355576040517ff5cadad500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61237386868661236487612275565b61236d87612275565b86611d67565b600061237d610f7a565b6000019050600081600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080841115612410576040517f8cd635d800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83810382600087815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550508281600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546124c691906135ad565b925050819055508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6287876040516125439291906136b8565b60405180910390a450505050505050565b6125738473ffffffffffffffffffffffffffffffffffffffff1661274d565b15612711578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b81526004016125b9959493929190613b4c565b6020604051808303816000875af19250505080156125f557506040513d601f19601f820116820180604052508101906125f29190613a60565b60015b61269157612601613a9a565b806308c379a00361265d5750612615613abc565b80612620575061265f565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126549190612a28565b60405180910390fd5b505b6040517f380147a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461270f576040517f3744db2900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b505050505050565b600080836001016000848152602001908152602001600020541415905092915050565b600081600001805490509050919050565b600080823b905060008111915050919050565b6000826000018054905082106127a2576040517fe637bf3b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8260000182815481106127b8576127b76134bd565b5b9060005260206000200154905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061280a826127df565b9050919050565b61281a816127ff565b811461282557600080fd5b50565b60008135905061283781612811565b92915050565b6000819050919050565b6128508161283d565b811461285b57600080fd5b50565b60008135905061286d81612847565b92915050565b6000806040838503121561288a576128896127d5565b5b600061289885828601612828565b92505060206128a98582860161285e565b9150509250929050565b6128bc8161283d565b82525050565b60006020820190506128d760008301846128b3565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612912816128dd565b811461291d57600080fd5b50565b60008135905061292f81612909565b92915050565b60006020828403121561294b5761294a6127d5565b5b600061295984828501612920565b91505092915050565b60008115159050919050565b61297781612962565b82525050565b6000602082019050612992600083018461296e565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156129d25780820151818401526020810190506129b7565b60008484015250505050565b6000601f19601f8301169050919050565b60006129fa82612998565b612a0481856129a3565b9350612a148185602086016129b4565b612a1d816129de565b840191505092915050565b60006020820190508181036000830152612a4281846129ef565b905092915050565b600060208284031215612a6057612a5f6127d5565b5b6000612a6e8482850161285e565b91505092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612ab4826129de565b810181811067ffffffffffffffff82111715612ad357612ad2612a7c565b5b80604052505050565b6000612ae66127cb565b9050612af28282612aab565b919050565b600067ffffffffffffffff821115612b1257612b11612a7c565b5b602082029050602081019050919050565b600080fd5b6000612b3b612b3684612af7565b612adc565b90508083825260208201905060208402830185811115612b5e57612b5d612b23565b5b835b81811015612b875780612b73888261285e565b845260208401935050602081019050612b60565b5050509392505050565b600082601f830112612ba657612ba5612a77565b5b8135612bb6848260208601612b28565b91505092915050565b600080fd5b600067ffffffffffffffff821115612bdf57612bde612a7c565b5b612be8826129de565b9050602081019050919050565b82818337600083830152505050565b6000612c17612c1284612bc4565b612adc565b905082815260208101848484011115612c3357612c32612bbf565b5b612c3e848285612bf5565b509392505050565b600082601f830112612c5b57612c5a612a77565b5b8135612c6b848260208601612c04565b91505092915050565b60008060008060808587031215612c8e57612c8d6127d5565b5b6000612c9c87828801612828565b945050602085013567ffffffffffffffff811115612cbd57612cbc6127da565b5b612cc987828801612b91565b935050604085013567ffffffffffffffff811115612cea57612ce96127da565b5b612cf687828801612b91565b925050606085013567ffffffffffffffff811115612d1757612d166127da565b5b612d2387828801612c46565b91505092959194509250565b600080600080600060a08688031215612d4b57612d4a6127d5565b5b6000612d5988828901612828565b9550506020612d6a88828901612828565b945050604086013567ffffffffffffffff811115612d8b57612d8a6127da565b5b612d9788828901612b91565b935050606086013567ffffffffffffffff811115612db857612db76127da565b5b612dc488828901612b91565b925050608086013567ffffffffffffffff811115612de557612de46127da565b5b612df188828901612c46565b9150509295509295909350565b600080600060608486031215612e1757612e166127d5565b5b6000612e2586828701612828565b9350506020612e368682870161285e565b9250506040612e478682870161285e565b9150509250925092565b600067ffffffffffffffff821115612e6c57612e6b612a7c565b5b602082029050602081019050919050565b6000612e90612e8b84612e51565b612adc565b90508083825260208201905060208402830185811115612eb357612eb2612b23565b5b835b81811015612edc5780612ec88882612828565b845260208401935050602081019050612eb5565b5050509392505050565b600082601f830112612efb57612efa612a77565b5b8135612f0b848260208601612e7d565b91505092915050565b60008060408385031215612f2b57612f2a6127d5565b5b600083013567ffffffffffffffff811115612f4957612f486127da565b5b612f5585828601612ee6565b925050602083013567ffffffffffffffff811115612f7657612f756127da565b5b612f8285828601612b91565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612fc18161283d565b82525050565b6000612fd38383612fb8565b60208301905092915050565b6000602082019050919050565b6000612ff782612f8c565b6130018185612f97565b935061300c83612fa8565b8060005b8381101561303d5781516130248882612fc7565b975061302f83612fdf565b925050600181019050613010565b5085935050505092915050565b600060208201905081810360008301526130648184612fec565b905092915050565b600080600060608486031215613085576130846127d5565b5b600061309386828701612828565b93505060206130a486828701612828565b92505060406130b58682870161285e565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6130f4816127ff565b82525050565b600061310683836130eb565b60208301905092915050565b6000602082019050919050565b600061312a826130bf565b61313481856130ca565b935061313f836130db565b8060005b8381101561317057815161315788826130fa565b975061316283613112565b925050600181019050613143565b5085935050505092915050565b60006020820190508181036000830152613197818461311f565b905092915050565b6000602082840312156131b5576131b46127d5565b5b60006131c384828501612828565b91505092915050565b6131d5816127ff565b82525050565b60006020820190506131f060008301846131cc565b92915050565b6131ff81612962565b811461320a57600080fd5b50565b60008135905061321c816131f6565b92915050565b60008060408385031215613239576132386127d5565b5b600061324785828601612828565b92505060206132588582860161320d565b9150509250929050565b600067ffffffffffffffff82111561327d5761327c612a7c565b5b613286826129de565b9050602081019050919050565b60006132a66132a184613262565b612adc565b9050828152602081018484840111156132c2576132c1612bbf565b5b6132cd848285612bf5565b509392505050565b600082601f8301126132ea576132e9612a77565b5b81356132fa848260208601613293565b91505092915050565b6000806000806080858703121561331d5761331c6127d5565b5b600061332b87828801612828565b945050602061333c8782880161285e565b935050604061334d8782880161285e565b925050606085013567ffffffffffffffff81111561336e5761336d6127da565b5b61337a878288016132d5565b91505092959194509250565b6000806040838503121561339d5761339c6127d5565b5b60006133ab85828601612828565b92505060206133bc85828601612828565b9150509250929050565b600080600080600060a086880312156133e2576133e16127d5565b5b60006133f088828901612828565b955050602061340188828901612828565b94505060406134128882890161285e565b93505060606134238882890161285e565b925050608086013567ffffffffffffffff811115613444576134436127da565b5b61345088828901612c46565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806134a457607f821691505b6020821081036134b7576134b661345d565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006135486026836129a3565b9150613553826134ec565b604082019050919050565b600060208201905081810360008301526135778161353b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006135b88261283d565b91506135c38361283d565b92508282019050808211156135db576135da61357e565b5b92915050565b60006135ec8261283d565b91506135f78361283d565b925082820390508181111561360f5761360e61357e565b5b92915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061364b6020836129a3565b915061365682613615565b602082019050919050565b6000602082019050818103600083015261367a8161363e565b9050919050565b6000604082019050818103600083015261369b8185612fec565b905081810360208301526136af8184612fec565b90509392505050565b60006040820190506136cd60008301856128b3565b6136da60208301846128b3565b9392505050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026137437fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613706565b61374d8683613706565b95508019841693508086168417925050509392505050565b6000819050919050565b600061378a6137856137808461283d565b613765565b61283d565b9050919050565b6000819050919050565b6137a48361376f565b6137b86137b082613791565b848454613713565b825550505050565b600090565b6137cd6137c0565b6137d881848461379b565b505050565b5b818110156137fc576137f16000826137c5565b6001810190506137de565b5050565b601f82111561384157613812816136e1565b61381b846136f6565b8101602085101561382a578190505b61383e613836856136f6565b8301826137dd565b50505b505050565b600082821c905092915050565b600061386460001984600802613846565b1980831691505092915050565b600061387d8383613853565b9150826002028217905092915050565b61389682612998565b67ffffffffffffffff8111156138af576138ae612a7c565b5b6138b9825461348c565b6138c4828285613800565b600060209050601f8311600181146138f757600084156138e5578287015190505b6138ef8582613871565b865550613957565b601f198416613905866136e1565b60005b8281101561392d57848901518255600182019150602085019450602081019050613908565b8683101561394a5784890151613946601f891682613853565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006139b58261398e565b6139bf8185613999565b93506139cf8185602086016129b4565b6139d8816129de565b840191505092915050565b600060a0820190506139f860008301886131cc565b613a0560208301876131cc565b8181036040830152613a178186612fec565b90508181036060830152613a2b8185612fec565b90508181036080830152613a3f81846139aa565b90509695505050505050565b600081519050613a5a81612909565b92915050565b600060208284031215613a7657613a756127d5565b5b6000613a8484828501613a4b565b91505092915050565b60008160e01c9050919050565b600060033d1115613ab95760046000803e613ab6600051613a8d565b90505b90565b600060443d10613b4957613ace6127cb565b60043d036004823e80513d602482011167ffffffffffffffff82111715613af6575050613b49565b808201805167ffffffffffffffff811115613b145750505050613b49565b80602083010160043d038501811115613b31575050505050613b49565b613b4082602001850186612aab565b82955050505050505b90565b600060a082019050613b6160008301886131cc565b613b6e60208301876131cc565b613b7b60408301866128b3565b613b8860608301856128b3565b8181036080830152613b9a81846139aa565b9050969550505050505056fea2646970667358221220bf3e3bd60ab289ae1e95f84f1b8af2c43d2ae3e523a3b3d5549a9dea7d6749da64736f6c63430008120033697066733a2f2f697066732f516d624d32666f587570363934685a71563941396531507a6756384670623641797a38647863396532764e393859697066733a2f2f697066732f516d63474e4d55366d776a5979336f7044504b4a446144574a6d4c41416f315671633552484c77447938746b7377697066733a2f2f697066732f516d5044354347785250724a6f5a4c35756f75737251486964505744554b504a626a576575376379674666757234697066733a2f2f516d586b50394e6a546157354478346d686e597a584366703169554471756276784e696d716f365a586b654b75582f"
