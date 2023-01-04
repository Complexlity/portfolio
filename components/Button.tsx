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
      className={`prose rounded-[4px] bg-primary py-1 px-[.65rem] text-xs text-white dark:bg-orange-300 dark:text-black  md:text-sm md:tracking-wide ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
