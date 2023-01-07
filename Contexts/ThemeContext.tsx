import { useState, useEffect, createContext, FC, useContext } from "react";

export type GlobalTheme = {
  darkMode: boolean;
  setDarkMode: (c: boolean) => void;
};
let theme = !!localStorage.getItem("darkTheme");
const ThemeContext = createContext<GlobalTheme>({
  darkMode: theme,
  setDarkMode: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const useThemeContext = () => useContext(ThemeContext);

const ThemeContextProvider = ({ children }: Props) => {
  const [darkMode, updateDarkMode] = useState(false);
  function setDarkMode() {
    updateDarkMode(!darkMode);
    localStorage.setItem("darkTheme", "yes");
  }

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
