import "./App.css";
import { Table } from "./components/Table/Table";
import { ThemeToggler } from "./components/ThemeToggler/ThemeToggler";
import { useSetTheme } from "./hooks/useSetTheme";
import { createContext } from "react";

export const darkModeContext = createContext<boolean>(false);

function App() {
  const { darkMode, handleSetDarkMode } = useSetTheme();
  return (
    <>
      <div className={`${darkMode ? "dark" : ""} relative`}>
        <div className="w-full h-screen dark:bg-gray-700 overflow-auto">
          <div className="py-10 grid place-items-center bg-gradient-to-b from-cyan-500 to-white dark:to-gray-700">
            <div className="p-10 bg-yellow-100 rounded-full opacity-80">
              <img className="h-[300px]" src="src/assets/earthTitlepic.png" />
            </div>
            <div className="mt-10 font-bold text-3xl dark:text-white">
              Countries data
            </div>
          </div>

          <darkModeContext.Provider value={darkMode}>
            <ThemeToggler
              darkMode={darkMode}
              handleSetDarkMode={handleSetDarkMode}
            />
            <Table></Table>
          </darkModeContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
