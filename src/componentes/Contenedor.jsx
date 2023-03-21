import React from "react";
import { githubApi } from "../api/API";
import { useQuery } from "react-query";
import { LabelTag } from "./LabelTag";
import LoadingSpinner from "./LoadingSpinner";
import useLabel from "../hooks/useLabel";
import LabelPicker from "./LabelPicker";
import useIssues from "../hooks/useIssues";
import IssuesList from "./IssuesList";

function Contenedor() {
  const [selectedLabels, setSelectedLabels] = React.useState([]);
  const { resultIssues, page, nextPage, prevPage } = useIssues();
  const onLabelChange = (labelName) => {
    selectedLabels.includes(labelName)
      ? setSelectedLabels(selectedLabels.filter((label) => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName]);
  };
  // fresh es data fresca , recien nueva la data
  return (
    <div className="flex flex-row w-[100%] gap-5">
      <div className="w-[60%] bg-[#d1d1d1] rounded-xl p-[15px]">
        {resultIssues.isLoading && <LoadingSpinner />}

        {resultIssues.isSuccess && (
          <>
            <IssuesList issues={resultIssues.data || []} />
           
          </>
        )}
         <nav className="flex items-center justify-center space-x-4">
              <button
                className={`bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded 
          active:scale-105 active:bg-gray-300 `}
                disabled={resultIssues.isFetching}
                onClick={() => {
                  prevPage();
                }}
              >
                Prev
              </button>
              <div className="flex items-center space-x-1">
                <button
                  className={`bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded `}
                >
                  {page}
                </button>
              </div>
              <button
                className={`bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded  active:scale-105 active:bg-gray-300
          `}
                onClick={() => {
                  nextPage();
                }}
                disabled={resultIssues.isFetching}
              >
                Next
              </button>
            </nav>
      </div>
      <div className="">
        <LabelPicker
          onLabelChange={onLabelChange}
          selectedLabels={selectedLabels}
        />
      </div>
    </div>
  );
}

export default Contenedor;
