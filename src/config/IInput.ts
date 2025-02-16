export interface IInput {
  lable?: string;
  name?: string;
  className?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | null;
  placeholder?: string;
}
