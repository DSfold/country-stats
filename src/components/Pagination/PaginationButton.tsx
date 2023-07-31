export interface PaginationButtonProps {
  lable: string;
  isStart?: boolean;
  isEnd?: boolean;
  isDisabled?: boolean;
  isCurrent?: boolean;
  onClick: () => void;
}

export const PaginationButton = (props: PaginationButtonProps) => {
  return (
    <li>
      <button
        disabled={props.isDisabled}
        onClick={props.onClick}
        className={`${props.isStart && "rounded-s-md"} ${
          props.isEnd && "rounded-e-md"
        } flex disabled:opacity-25 items-center justify-center px-4 h-10 leading-tight text-gray-500 border focused:bg-blue-400 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-slate-500
        ${
          props.isCurrent && "bg-blue-300 dark:bg-blue-500"
        } dark:border-slate-400 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white`}
      >
        {props.lable}
      </button>
    </li>
  );
};
