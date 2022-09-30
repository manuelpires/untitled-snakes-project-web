import { ReactNode, MouseEvent } from "react";

interface Props {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const RoundButton = ({
  children,
  disabled = false,
  onClick = () => {},
}: Props) => (
  <button
    className={`
      cursor-pointer text-white bg-green-500 w-10 h-10 rounded-full border-none outline-none duration-200
      disabled:bg-gray-800 disabled:cursor-default
      hover:bg-sky-500
    `}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default RoundButton;
