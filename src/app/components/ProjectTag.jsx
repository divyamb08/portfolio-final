import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#004c4c] bg-white border-black"
    : "text-white bg-[#004c4c] border-slate-600 hover:border-black hover:bg-white hover:text-[#004c4c]";
  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`} onClick={() => onClick(name)}>{name}</button>
  );
};

export default ProjectTag;