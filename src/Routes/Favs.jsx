import { useContext } from "react";
import { GlobalContext } from "../context";
const Favs = ({children}) => {
    const {stateTheme} = useContext(GlobalContext);
    return(
        <>
          <div style={{  background: stateTheme.background, color: stateTheme.font}}>
            {children}
            <h1>Favs</h1>
          </div>
        </>
      );
}

export default Favs;