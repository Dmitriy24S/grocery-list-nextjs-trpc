import { CardProps } from "@/types/CardProps";
import { NextPage } from "next";
import React from "react";

// const Card:NextPage = ({children}:React.ReactNode) => { // ?
const Card: NextPage<CardProps> = ({ children }) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-slate-100">
      {children}
    </section>
  );
};

export default Card;
