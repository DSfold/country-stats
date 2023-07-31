import { useState } from "react";

import { TableRowExpanded } from "./TableRowExpanded";

interface TableRowProps {
  flag: string;
  name: string;
}

export const TableRow = (props: TableRowProps) => {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <>
      <tr
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-slate-200 h-14 mt-2 cursor-pointer
        dark:bg-slate-500
       pt-3 `}
      >
        <td
          className={`text-left dark:text-gray-100 pl-5 ${
            isOpen ? "rounded-tl-lg" : "rounded-s-md"
          } max-w-[150px]`}
        >
          {props.name}
        </td>
        <td className="text-left italic text-gray-400 dark:text-gray-300">
          {!isOpen && "Click for more info"}
        </td>
        <td
          className={`text-right pr-10 ${
            isOpen ? "rounded-tr-lg" : "rounded-e-md"
          }`}
        >
          <div className="flex justify-end">
            <img className="max-w-[50px]" src={props.flag} />
          </div>
        </td>
      </tr>
      {isOpen && <TableRowExpanded name={props.name} />}
    </>
  );
};
