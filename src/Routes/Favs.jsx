import { useContext } from "react";
import GlobalContext from "../context";

const Favs = ({children}) => {
    const {theme} = useContext(GlobalContext);
    return(
        <>
          <div style={{ background: theme.background, color: theme.font }}>
            {children}
            <h1>Favs</h1>
          </div>
        </>
      );
}

export default Favs;