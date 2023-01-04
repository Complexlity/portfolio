import { useState, useEffect, createContext, FC, useContext } from "react";

type ThemeContextProps = {
  children: React.ReactNode;
};

interface Theme {}

export const ThemeContext = createContext<boolean>(false);

// const ThemeContextProvider = ({ children }: ThemeContextProps) => {
//   const [darkMode, setDarkMode] = useState(false);
//   function updateTheme() {
//     setDarkMode(!darkMode);
//   }

//   return (
//     <ThemeContext.Provider value={darkMode}>{children}</ThemeContext.Provider>
//   );
// };

// export default ThemeContextProvider;
