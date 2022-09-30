import { ReactNode, MouseEvent } from "react";

interface Props {
  children?: ReactNode;
  disabled?: boolean;
  isSmall?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  children,
  disabled = false,
  isSmall = false,
  onClick = () => {},
}: Props) => (
  <button
    className={`
      relative text-base cursor-pointer text-white bg-transparent py-4 px-8 min-w-[200px] border-none duration-200
      before:content-[''] before:absolute before:inset-0 before:rounded-[50px] before:p-0.5 before:duration-200 before:bg-gradient-160 before:from-sky-500 before:to-green-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]
      disabled:cursor-default disabled:text-gray-300 disabled:before:p-0.5 disabled:before:bg-none disabled:before:bg-gray-800
      hover:text-green-500 hover:before:p-1
      sm:text-xl
      ${isSmall && "py-3 px-4 min-w-[100px] sm:text-base"}
    `}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
