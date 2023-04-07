import { useContext } from "react";
import ThemeContext from "../context";

const Favs = ({children}) => {
    const {theme} = useContext(ThemeContext);
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