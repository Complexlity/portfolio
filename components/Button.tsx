import Link from "next/link";
import { FC } from "react";
import { Url } from "url";

interface Props {
  text: string;
  color?: string;
}

const Button: FC<Props> = ({ text, color }) => {
  const style = color
    ? {
        backgroundColor: color,
      }
    : {};
  return (
    <button
      style={style}
      className="max-w-[64] rounded-[.35rem] bg-primary py-2 px-[.75rem] text-white"
    >
      {text}
    </button>
  );
};

export default Button;
