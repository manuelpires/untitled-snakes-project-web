import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Card = ({ children }: Props) => (
  <div
    className={`
      flex items-center max-w-md relative p-6 box-border text-white bg-black bg-clip-padding border-solid border-2 border-transparent rounded-2xl
      before:content-[''] before:absolute before:inset-0 before:z-[-1] before:m-[-2px] before:bg-gradient-130 before:from-sky-500 before:to-green-500 before:rounded-2xl
    `}
  >
    {children}
  </div>
);

export default Card;
