import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

export function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}

const ThemePovider = ThemeContext.Provider;
export default ThemePovider;
