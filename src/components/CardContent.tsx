import { CardProps } from "@/types/CardProps";
import { NextPage } from "next";
import React from "react";

const CardContent: NextPage<CardProps> = ({ children }) => {
  return (
    <div className="bg-white w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 rounded-lg drop-shadow-md">
      {children}
    </div>
  );
};

export default CardContent;
