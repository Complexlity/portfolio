// React hooks/functions used to make global state context. See https://dev.to/madv/usecontext-with-typescript-23ln for more information
import { useState, createContext, useContext } from "react";

// Create the theme interface
export type GlobalTheme = {
  darkMode: boolean;
  setDarkMode: (c: boolean) => void;
};

// Initializes the context value
const ThemeContext = createContext<GlobalTheme>({
  darkMode: false,
  setDarkMode: () => {},
});

interface Props {
  children: React.ReactNode;
}

// Creates a custom context hook to read the context data in other files
export const useThemeContext = () => useContext(ThemeContext);

// This function wraps a component with the theme context so it is accessible in the component and all sub-components
const ThemeContextProvider = ({ children }: Props) => {
  // Initializes the theme state data
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
