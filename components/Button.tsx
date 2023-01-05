import { FC } from "react";

interface Props {
  text: string;
  color?: string;
  width?: string;
  styles?: string;
}

const Button: FC<Props> = ({ text, color, width, styles }) => {
  const style = { backgroundColor: color || "", width: width || "" } || "";
  return (
    <button
      style={style}
      className={` bg-primary  px-2  text-gray-100 dark:bg-orange-300 dark:text-gray-900   md:tracking-wide ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
