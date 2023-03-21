import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import { LabelTag } from "./LabelTag";
import useLabel from "../hooks/useLabel";

function LabelPicker({ onLabelChange, selectedLabels }) {
  const { resultLabel } = useLabel();
  return (
    <div className="flex flex-row gap-1 flex-wrap bg-[#051e3d] p-5 rounded-xl">
      {resultLabel.isLoading && <LoadingSpinner />}
      {resultLabel.isSuccess &&
        resultLabel.data.map((result) => (
          <LabelTag
            key={result.id}
            label={result}
            onLabelChange={onLabelChange}
            selectedLabels={selectedLabels}
          />
        ))}
    </div>
  );
}

export default LabelPicker;
