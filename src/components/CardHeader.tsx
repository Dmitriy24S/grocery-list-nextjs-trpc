import { CardHeaderProps } from "@/types/CardHeaderProps";
import { NextPage } from "next";
import React from "react";

const CardHeader: NextPage<CardHeaderProps> = ({ title, listLength }) => {
  return (
    <div className="card-header flex flex-row items-center justify-between p-3 border-b border-slate-200">
      <div className="card-header-content flex flex-row items-center justify-between gap-2">
        <h1 className="title text-base font-medium tracking-wide text-gray-900">{title}</h1>
        <span className="list-length h-5 w-5 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full text-xs">
          {listLength}
        </span>
      </div>
    </div>
  );
};

export default CardHeader;
