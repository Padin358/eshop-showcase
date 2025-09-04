import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light_theme' ? 'dark_theme' : 'light_theme'));
  };

  return (
    <button onClick={toggleTheme}>
      Přepnout na {theme === 'light_theme' ? 'tmavý' : 'světlý'} režim
    </button>
  );
}

export default ThemeToggle