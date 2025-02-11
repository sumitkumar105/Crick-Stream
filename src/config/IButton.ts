export interface IButton {
  lable: String;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  type: "submit" | "button" | "reset";
  disabled?: boolean;
  className: string;
}
