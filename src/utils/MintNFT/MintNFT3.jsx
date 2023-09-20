import axios from "axios";
// import { useState } from "react";
import { NFTPORT_API_KEY } from "../../../constants";
// const nftport_key = process.env.NFTPORT_API_KEY ;
export const MintNFT3 = async (ipfsURI, userAddress) => {
  //   const [data, setData] = useState();
  // const [ipfs, setIpfs] = useState("");
  // const [address, setAddress] = useState("");
  // setIpfs(ipfsURI);
  // setAddress(userAddress);
  console.log(ipfsURI, userAddress);
  const options = {
    method: "POST",
    url: "https://api.nftport.xyz/v0/mints/customizable",
    headers: {
      "Content-Type": "application/json",
      Authorization: "4c700476-ff0d-48b5-92bc-bc39436203f3"},
    data: {
      chain: "polygon",
      contract_address: "0xDBd95D79d3A019Cd16D02B6a386aDa8C717C6A09",
      metadata_uri: "https://bafyreigvelecwe53se34aim4lo7gy5x37fjga2d3net2cszi552qebgo3q.ipfs.dweb.link/metadata.json",
      mint_to_address: "0x990190c4691f45b14205cA451104522D6B1B698a",
    },
  };

  const data = axios
    .request(options)
    .then(function (response) {
      console.log("NFT is sucessfully minted 🚀🚀🚀");
      console.log(response.data);
      //   setData(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return data;
};
