import { useEffect, useState } from "react";

export const useSetTheme = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem("prefersDarkMode");
    if (storedPreference) {
      setDarkMode(JSON.parse(storedPreference));
    }
    setFlag(true);
  }, []);

  //Set to Local Storage
  useEffect(() => {
    if (flag) {
      localStorage.setItem("prefersDarkMode", darkMode.toString());
      document.body.classList.toggle("dark", darkMode);
    }
  }, [darkMode, flag]);

  const handleSetDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return { darkMode, handleSetDarkMode };
};
