import { DeleteIcon } from "../../icons/DeleteIcon";

export interface DeleteButtonProps {
  name: string;
  onClick: (name: string) => void;
}

export const DeleteButton = (props: DeleteButtonProps) => {
  return (
    <div
      onClick={() => props.onClick(props.name)}
      className="flex justify-between bg-slate-800 rounded-lg  w-fit-content p-1 my-2 mr-7"
    >
      <button className="mx-1 text-white">{props.name}</button>
      <div className="pt-[7px] px-2">
        <DeleteIcon />
      </div>
    </div>
  );
};
