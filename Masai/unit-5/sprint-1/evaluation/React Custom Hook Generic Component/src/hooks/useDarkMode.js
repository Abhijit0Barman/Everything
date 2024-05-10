import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const store = localStorage.getItem("darkMode");
    setIsDarkMode(store === "true");
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    localStorage.setItem("darkMode", newDarkMode.toString());
    setIsDarkMode(newDarkMode);
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
