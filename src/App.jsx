
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ThemeContext from "./context";

export const themes = {
  light: {
    font: "black",
    background: "white"
  },
  dark: {
    font: "white",
    background: "black"
  }
}

function App() {
  const [theme, setTheme] = useState(themes.light)

  const handleChangeTheme = () => {
    console.log(theme);
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
        <div>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
