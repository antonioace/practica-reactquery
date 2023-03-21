import React from "react";
import { useNavigate } from "react-router-dom";
import IssueCard from "./IssueCard";

function IssuesList({ issues }) {
  /*   const { title, user, created_at, body } = issue; */
  const navigate = useNavigate();
  const onHandleSelectIssue = (issue) => {
    navigate(`issues/${issue.number}`);
  };
  return (
    <div className="flex flex-col gap-3 m-5 text-ellipsis">
      {issues.map((issue) => (
        <IssueCard
          key={issue.id}
          issue={issue}
          onHandleSelectIssue={onHandleSelectIssue}
        />
      ))}
    
    </div>
  );
}

export default IssuesList;
