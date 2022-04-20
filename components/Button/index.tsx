import { ReactNode, MouseEvent } from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.css";

const cx = classNames.bind(styles);

interface Props {
  children?: ReactNode;
  disabled?: boolean;
  isSmall?: boolean;
  isRound?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  children,
  disabled = false,
  isSmall = false,
  isRound = false,
  onClick = () => {},
}: Props) => (
  <button
    className={cx({
      button: !isRound,
      small: isSmall,
      roundButton: isRound,
    })}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
