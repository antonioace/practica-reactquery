import React from "react";
import { useQuery } from "react-query";
import { githubApi } from "../api/API";
import { sleep } from "../helpers/sleeps";
const getIssueById = async (id) => {
  await sleep(2000);
  const { data } = await githubApi.get(`/issues/${id}`);

  return data;
};

const getIssuesComments = async (id) => {
  const { data } = await githubApi.get(`/issues/${id}/comments`);
  return data;
};

function useIssueInfo(id) {
  const resultIssueInfo = useQuery(["issueInfo", id], () =>
    getIssueById(Number(id))
  );

  const resultIssueComents = useQuery(
    ["issueInfo", id, "comments"],
    () => getIssuesComments(Number(resultIssueInfo?.data?.number)),
    {
      enabled: resultIssueInfo?.data!==undefined,
    }
  );

  return {
    resultIssueInfo,
    resultIssueComents,
  };
}

export default useIssueInfo;
