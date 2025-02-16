import { IButton } from "../../config/IButton.ts";
export default function UiButton({
  lable,
  onClick,
  type,
  disabled,
  className,
}: IButton) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`py-2 px-4 rounded font-medium ${className} ${
        disabled ? "bg-gray-300 cursor-not-allowed" : ""
      }`}
    >
      {lable}
    </button>
  );
}
