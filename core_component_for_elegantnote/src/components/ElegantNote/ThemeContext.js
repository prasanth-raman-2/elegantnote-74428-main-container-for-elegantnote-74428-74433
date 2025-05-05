import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

// PUBLIC_INTERFACE
export function useTheme() {
  /**
   * Custom hook for accessing theme context.
   */
  return useContext(ThemeContext);
}

// PUBLIC_INTERFACE
export function ThemeProvider({ children }) {
  /**
   * Theme provider component that manages theme state.
   */
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
