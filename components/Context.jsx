import { useState, useEffect, createContext, FC, useContext } from "react";

const ThemeContext = createContext(false);
const ThemeUpdateContext = createContext(null);
export function useThemeContext() {
  return useContext(ThemeContext);
}
export function useThemeUpdateContext() {
  return useContext(ThemeUpdateContext);
}

const ContextProvider = (props) => {
  let chidren = props.chidren;
  const [darkMode, setDarkMode] = useState(false);
  function updateTheme() {
    setDarkMode(!darkMode);
    return true;
  }

  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeUpdateContext.Provider value={updateTheme}>
        {chidren}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ContextProvider;
