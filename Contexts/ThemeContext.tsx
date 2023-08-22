import { useState, createContext, useContext } from "react";



export type GlobalTheme = {
  darkMode: boolean;
  setDarkMode: (c: boolean) => void;
};
const ThemeContext = createContext<GlobalTheme>({
  darkMode: false,
  setDarkMode: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const useThemeContext = () => useContext(ThemeContext);

const ThemeContextProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
