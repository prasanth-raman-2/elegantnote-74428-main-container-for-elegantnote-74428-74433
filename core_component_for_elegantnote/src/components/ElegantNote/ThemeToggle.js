import React from 'react';
import { useTheme } from './ThemeContext';

// PUBLIC_INTERFACE
function ThemeToggle() {
  /**
   * Component for toggling between light and dark themes.
   */
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;
