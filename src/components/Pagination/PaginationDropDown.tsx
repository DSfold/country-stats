export interface PaginationDropDownProps {
  handleSetTake: (value: number) => void;
}

export const PaginationDropDown = (props: PaginationDropDownProps) => {
  return (
    <>
      <select
        defaultValue={10}
        onChange={(e) => props.handleSetTake(Number(e.target.value))}
        id="takeValue"
        className="mr-5 max-w-[50px] max-h-[40px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-slate-500 dark:border-slate-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </>
  );
};
