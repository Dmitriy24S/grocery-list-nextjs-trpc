import { CardProps } from "@/types/CardProps";
import { NextPage } from "next";
import React from "react";

const List: NextPage<CardProps> = ({ children }) => {
  return <div className="h-72 overflow-y-auto">{children}</div>;
};

export default List;
