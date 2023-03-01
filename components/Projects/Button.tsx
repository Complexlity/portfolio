import { FC } from "react";
import { ImNewTab } from "react-icons/im";

interface Props {
  text: string;
  children: React.ReactNode;
}

const Button: FC<Props> = ({ text, children }) => {
  return (
    <div className="relative flex cursor-pointer items-center gap-2 rounded-lg bg-gray-300 px-4 py-2 dark:bg-gray-700 dark:text-white">
      <button>{text}</button>
      {children}
      <ImNewTab className="absolute right-[.2rem] top-0 w-[.6rem] dark:text-white" />
    </div>
  );
};

export default Button;
