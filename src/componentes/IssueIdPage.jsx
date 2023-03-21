import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useIssues from "../hooks/useIssues";
import LoadingSpinner from "./LoadingSpinner";
import IssueCard from "./IssueCard";
import useIssueInfo from "../hooks/useIssueInfo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function IssueIdPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { resultIssueInfo, resultIssueComents } = useIssueInfo(id);

  return (
    <div className="flex flex-col justify-center items-center m-[20px]">
      <div className="flex flex-row justify-end w-[100%]">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            navigate("/");
          }}
        >
          Regresar
        </button>
      </div>
      {console.log("xadasdas:", resultIssueComents)}
      {resultIssueInfo.isLoading && <LoadingSpinner />}
      {resultIssueInfo.isSuccess && (
        <div>
          <IssueCard issue={resultIssueInfo.data || {}} mostrarBody={true} />
          <div className="mt-4 border-spacing-3 border-3 border-[#d1d1d1] rounded-xl bg-[#d1d1d1] p-3">
            <h1 className="text-left font-bold mt-3 "> Lista de comentarios</h1>
            <hr className="my-2 border-[#707070]" />

            {resultIssueComents.isLoading && <LoadingSpinner />}
            {resultIssueComents.isSuccess &&
              [...resultIssueComents?.data].map((comment) => {
                {
                  console.log("Comment:", comment);
                }
                return (
                  <div className="bg-slate-100 rounded-xl mb-3 flex flex-col p-[20px] w-[100%]">
                    <h1 className="font-bold text-left m-3 text-zinc-600">
                      {comment.user.login}
                    </h1>
                    <div
                      className="rounded-[50%] bg-slate-400 w-[120px] h-[120px] m-3"
                      style={{
                        backgroundImage: `url(${comment?.user.avatar_url})`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div>
                      {/*      <ReactMarkdown children={comment.body} />   */}
                      <p>{comment.body}</p> 
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default IssueIdPage;
