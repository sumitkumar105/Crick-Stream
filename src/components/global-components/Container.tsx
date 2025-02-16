import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="container mx-auto justify-center items-center px-2">
      {children}
    </div>
  );
}
