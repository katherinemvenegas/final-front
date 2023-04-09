import { createContext, useEffect, useReducer, useState } from "react";

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

const getFavsDentists = () => {
  const localFav = localStorage.getItem("favs");
  return localFav ? JSON.parse(localFav) : [];
}

const addFav = (fav) => {
  localStorage.setItem("favs", JSON.stringify(fav));
}

const reducerFav = (stateFav, action) => {
  switch (action.type) {
    case "add":
      const addNew = [...stateFav, action.payload];
      addFav(addNew);
      return addNew;


    case "remove":
      const dentistsFilter = stateFav.filter(
        (dentists) => dentists.dentist.id !== action.payload.dentist.id
      );
      addFav(dentistsFilter);
      return dentistsFilter;

    default:
      return stateFav;
  }
}

const getIconState = () => {
  const localIconState = localStorage.getItem("iconState");
  return localIconState ? JSON.parse(localIconState) : {};
}

const addIconState = (iconState) => {
  localStorage.setItem("iconState", JSON.stringify(iconState));
}

function reducerIconFav(stateIcon, action) {
  switch (action.type) {
    case 'add':
      const addIcon = { ...stateIcon, [action.payload.dentist.id]: true };
      addIconState(addIcon)
      return addIcon
    case 'remove':
      const removeIcon = { ...stateIcon, [action.payload.dentist.id]: false };
      addIconState(removeIcon)
      return removeIcon
    default:
      return stateIcon;
  }
}


const getTheme = () => {
  const localTheme = localStorage.getItem("theme");
  return localTheme ? JSON.parse(localTheme) : themes.light;
}

const setTheme = (theme) => {
  localStorage.setItem('theme', JSON.stringify(theme));
}

const reducerTheme = (stateTheme, action) => {
  switch (action.type) {
    case "toggle_theme":
      const changeTheme = stateTheme === themes.light ? themes.dark : themes.light
      setTheme(changeTheme);
      return changeTheme;
    default:
      return stateTheme;

  }
}

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

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

  const [stateFav, dispatchFav] = useReducer(reducerFav, getFavsDentists());
  const [isFav, dispatchIsFav] = useReducer(reducerIconFav, getIconState());
  const [stateTheme, dispatchTheme] = useReducer(reducerTheme, getTheme());

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(stateTheme));
  }, [stateTheme])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(stateFav));
  }, [stateFav])

  return (
    <GlobalContext.Provider value={{ dentists, stateFav, dispatchFav, stateTheme, dispatchTheme, isFav, dispatchIsFav }}>
      {children}
    </GlobalContext.Provider>
  )
};
export default GlobalContextProvider;