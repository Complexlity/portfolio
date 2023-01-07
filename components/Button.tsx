import { FC } from "react";

interface Props {
  text: string;
  styles?: string;
}

const Button: FC<Props> = ({ text, styles }) => {
  return (
    <button
      className={`bg-primary px-2  text-gray-100 hover:bg-primaryLight dark:bg-orange-300 dark:text-[80%] dark:font-semibold dark:text-black   md:tracking-wide ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
