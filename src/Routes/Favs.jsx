import { useContext } from "react";
import CardFavs from "../Components/CardFavs";
import { GlobalContext } from "../context";
const Favs = ({ children }) => {
  const { stateTheme } = useContext(GlobalContext);
  return (
    <>
      <div style={{ background: stateTheme.background, color: stateTheme.font }}>
        {children}
        <h1>Favs</h1>
        <CardFavs />
      </div>
    </>
  );
}

export default Favs;