export const LabelTag = ({ label, selectedLabels, onLabelChange }) => {
  return (
    <span
      className={`py-1 px-2 rounded-full text-sm hover:bg-[#d1d1d1] hover:cursor-pointer }  `}
      style={{
        borderWidth:"2px",
        borderStyle:"solid",
        border: `#${label?.color}`,
        color: `#${label?.color}`,
        backgroundColor:selectedLabels.includes(label.name)?"#d1d1d1":""
      }}
      onClick={() => {
        onLabelChange(label.name);
      }}
    >
     
      {label.name}
    </span>
  );
};
