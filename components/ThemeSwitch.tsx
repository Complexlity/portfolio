import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import type { FC } from "react";
interface Props {}

const ThemeSwitch: FC<Props> = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
    theme === "dark" ? null : setTheme("light");
  }, []);

  if (!mounted) {
    return null;
  }
  function toggleTheme() {
    if (theme === "dark") return setTheme("light");
    return setTheme("dark");
  }
  return (
    <div
      onClick={toggleTheme}
      className="fixed bottom-4 right-8 rounded-full bg-primary/70 p-3 dark:bg-gray-500/90 md:static md:block md:rounded-none md:bg-inherit md:dark:bg-inherit"
    >
      {theme === "light" ? (
        <BsFillSunFill className="h-6 w-6 cursor-pointer text-gray-100 md:text-blue-500" />
      ) : null}
      {theme === "dark" ? (
        <BsMoonFill className="h-6 w-6 scale-[90%] cursor-pointer text-amber-200" />
      ) : null}
    </div>
  );
};

export default ThemeSwitch;
