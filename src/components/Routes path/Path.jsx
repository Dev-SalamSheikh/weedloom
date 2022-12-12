import React from "react";

const Path = ({ first, second, third, fourth, fifth }) => {
  return (
    <div className="photographer__page__content">
      <div className="path text-dateColor-900 text-sm font-">
        <span className="hover:text-textPrimary-900 duration-150 cursor-pointer">
          {first}
        </span>{" "}
        &gt;{" "}
        <span className="hover:text-textPrimary-900 duration-150 cursor-pointer">
          {second}
        </span>{" "}
        &gt;{" "}
        <span className="hover:text-textPrimary-900 duration-150 cursor-pointer">
          {third}
        </span>
        &gt;{" "}
        <span className="hover:text-textPrimary-900 duration-150 cursor-pointer">
          {fourth}
        </span>
        &gt;{" "}
        <span className="hover:text-textPrimary-900 duration-150 cursor-pointer">
          {fifth}
        </span>
      </div>
    </div>
  );
};

export default Path;
