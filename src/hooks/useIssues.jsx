import React from "react";
import { githubApi } from "../api/API";
import { useQuery } from "react-query";
import LoadingSpinner from "../componentes/LoadingSpinner";

const getIssues = async (page) => {
  let params = new URLSearchParams();
  params.append("page", page.toString());
  params.append("per_page", "5");
  const { data } = await githubApi.get("/issues", {
    params,
  });
  return data;
};
function useIssues() {
  const [page, setPage] = React.useState(1);
  const resultIssues = useQuery(["issues", page], () => getIssues(page));

  const nextPage = () => {
    if (resultIssues?.data?.length === 0) return;
    setPage(page + 1);
  };
  const prevPage = () => {
    if (resultIssues?.data?.length > 1) setPage(page - 1);
  };
  return {
    resultIssues,
    page: resultIssues.isFetching ? <LoadingSpinner /> : page,
    nextPage,
    prevPage,
  };
}

export default useIssues;
