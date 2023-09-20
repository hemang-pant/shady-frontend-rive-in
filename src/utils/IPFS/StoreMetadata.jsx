import React from "react";
import { useState } from "react";
import { NFTStorage } from "nft.storage";
import { NFT_STORAGE_API_KEY } from "../../../constants";
/// used NFT.storage to prepare the metadata for the NFT
export const StoreMetadata = async (image, Name, audioCID, Description) => {

  console.log("Preparing Metadata ....");
  const nft = {
    image: image,
    name: Name,
    description: `The music file is stored here : ${audioCID} . & ${Description} .Check more details on the website`,
    external_url: audioCID,
  };
  console.log("Uploading Metadata to IPFS ....");
  const client = new NFTStorage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEVERWJCMEZCNTk3REI4MTUxNkU5M2Y4YmM3RjJmQ0Q2ODYzNDAyOEUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1ODU4MDY5OTE4MSwibmFtZSI6Ik11c2ljMyJ9.V6Ny_9VV_XLIIFDFIEG8alEdJTwxmfHJMaMDJEf00L4"});
  const metadata = await client.store(nft, {});
  console.log(metadata);
  console.log("NFT data stored successfully 🚀🚀");
  console.log("Metadata URI: ", metadata.url);
  // SetMetadataURI(metadata.url);

  return metadata;
};
