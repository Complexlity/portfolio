import Link from "next/link";
import { FC } from "react";
import { Url } from "url";

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
      className={` rounded-[.35rem] bg-primary py-2 px-[.75rem] text-xs text-white md:text-sm md:tracking-wide ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
