import { IInput } from "../../config/IInput.ts";
export default function ({
  lable,
  name,
  className,
  type,
  onChange,
  value,
  placeholder,
}: IInput) {
  return (
    <div className="flex  flex-col gap-1">
      {lable && <p className="font-semibold ">{lable}</p>}
      <input
        className={className}
        type={type}
        onChange={onChange}
        value={value ?? ""}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
