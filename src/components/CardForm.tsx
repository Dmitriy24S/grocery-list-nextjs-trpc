import { CardFormProps } from "@/types/CardFormProps";
import { NextPage } from "next";
import React from "react";

const CardForm: NextPage<CardFormProps> = ({ value, onChange, submit }) => {
  return (
    <form
      className="form bg-white w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 rounded-lg drop-shadow-md mt-4"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <div className="input-container relative">
        <input
          className="w-full py-4 pl-3 pr-16 text-sm rounded-lg"
          type="text"
          placeholder="Grocery item name..."
          value={value}
          onChange={onChange}
        />
        <button
          className="absolute p-2 text-white -translate-y-1/2 bg-blue-600 rounded-full top-1/2 right-4"
          onClick={submit}
        >
          {/* Svg + icon */}
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default CardForm;
