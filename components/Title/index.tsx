import classNames from "classnames/bind";
import styles from "./Title.module.css";

const cx = classNames.bind(styles);

type Props = {
  text: string;
  isMainTitle?: boolean;
};

const Title = ({ text, isMainTitle = false }: Props) => (
  <h1 className={cx({ title: true, main: isMainTitle })}>{text}</h1>
);

export default Title;
