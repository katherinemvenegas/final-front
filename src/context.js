import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

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

const GlobalContextProvider = ({children}) => {

        const [dentists, setDentists] = useState([]);
      
        const url = 'https://jsonplaceholder.typicode.com/users';
      
        const getAllDentists = async () => {
          const response = await fetch(url);
          const data = await response.json();
          setDentists(data)
        }
        useEffect(() => {
          getAllDentists();
        }, [])
      
        const localTheme = JSON.parse(localStorage.getItem('theme'));
        const [theme, setTheme] = useState(localTheme ?? themes.light);
      
        const handleChangeTheme = () => {
          console.log(theme);
          theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
        }
      
        useEffect(() => {
          localStorage.setItem('theme', JSON.stringify(theme));
        }, [theme])
      
    return(
    <GlobalContext.Provider value={{theme, handleChangeTheme, dentists}}>
        {children}
    </GlobalContext.Provider>
    )
};
export default GlobalContextProvider;