import React from "react";


function IssueCard(props) {
  const { issue, onHandleSelectIssue, mostrarBody } = props;
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 hover:${
        !mostrarBody ? "cursor-pointer" : ""
      }`}
      onClick={() => {
        onHandleSelectIssue && onHandleSelectIssue(issue);
      }}
    >
      <h2 className="text-lg font-bold">{issue?.title}</h2>
      <div className="flex items-center mt-2">
        <img
          className="w-6 h-6 rounded-full mr-2"
          src={issue?.user?.avatar_url}
          alt={`${issue?.user?.login} avatar`}
        />
        <span className="text-sm font-medium">{issue?.user?.login}</span>
      </div>
      <p className="text-sm text-gray-600 mt-2">{issue?.created_at}</p>
      <hr className="my-2" />
      {mostrarBody && (
        <div >
     {/*      <ReactMarkdown >{issue?.body} </ReactMarkdown> */}
         <p>{issue.body}</p> 
        </div>
      )}
    </div>
  );
}

export default IssueCard;
