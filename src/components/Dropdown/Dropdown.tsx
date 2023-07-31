export interface DropdownProps {
  data: string[];
  name: string;
  handleSetCurrentName: (name: string) => void;
}

export const Dropdown = (props: DropdownProps) => {
  return (
    <div className="relative lg:max-w-sm pr-7">
      <select
        defaultValue={props.name}
        onChange={(e) => props.handleSetCurrentName(e.target.value)}
        className="w-full p-1 text-gray-700 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
      >
        {props.data.map((el) => (
          <option key={el}>{el}</option>
        ))}
      </select>
    </div>
  );
};
