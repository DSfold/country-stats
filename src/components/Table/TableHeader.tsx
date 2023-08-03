import { DeleteIcon } from "@src/icons/DeleteIcon";

export interface TableHeaderProps {
  searchValue?: string;
  handleSetSearchValue: (value: string) => void;
}

export const TableHeader = (props: TableHeaderProps) => {
  return (
    <tr className="bg-slate-400 top-0 h-14 sticky dark:bg-gray-800 dark:text-gray-300">
      <th className="text-left pl-5 rounded-s-md pt">Country</th>
      <th>
        <div>
          <div className="flex relative w-fit">
            <input
              value={props.searchValue}
              placeholder="Search..."
              className="bg-gray-300 text-light dark:bg-gray-500 italic px-4 rounded-xl w-full outline-0 font-thin"
              onChange={(e) => props.handleSetSearchValue(e.target.value)}
            ></input>
            {props.searchValue && (
              <div
                className="absolute right-2 top-1.5 cursor-pointer"
                onClick={() => props.handleSetSearchValue("")}
              >
                <DeleteIcon />
              </div>
            )}
          </div>
        </div>
      </th>
      <th className="text-right pr-10 rounded-e-md">Flag</th>
    </tr>
  );
};
