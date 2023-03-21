import React from "react";
import { useQuery } from "react-query";
import { githubApi } from "../api/API";
import { sleep } from "../helpers/sleeps";
const getLabels = async () => {
  await sleep(2000);
  const { data } = await githubApi.get("/labels");

  return data;
};
const useLabel = () => {
  const resultLabel = useQuery("labels", getLabels, {
/*     initialData:[], */
   /*  placeholderData: [
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "❤️",
        color: "ffffff",
        default: false,
        description: null,
      },
      {
        id: 69105383,
        node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
        url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
        name: "Browser: IE",
        color: "c7def8",
        default: false,
        description: null,
      },
    ], */
    /*    staleTime:1000*60*60 */
  });

  return { resultLabel };
};

export default useLabel;
