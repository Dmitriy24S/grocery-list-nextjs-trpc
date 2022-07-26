import { ListItemProps } from "@/types/ListItemProps";
import { NextPage } from "next";
import React from "react";

const ListItem: NextPage<ListItemProps> = ({ item, onUpdate }) => {
  return (
    <label
      htmlFor={item.title}
      className="item h-12 border-b flex items-center justify-start px-3 cursor-pointer"
      // onClick={() => onUpdate?.(item)}
      // Cannot invoke an object which is possibly 'undefined'.
    >
      <input
        id={item.title}
        type="checkbox"
        defaultChecked={item.checked as boolean}
        className="w-4 h-4 border-gray-300 rounded mr-4"
        onClick={() => onUpdate?.(item)}
        // Cannot invoke an object which is possibly 'undefined'.
      />
      <h2 className="text-gray-600 tracking-wide text-sm">{item.title}</h2>
    </label>
  );
};

export default ListItem;
