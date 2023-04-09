import { useContext } from "react";
import { GlobalContext } from "../context";
import styles from "./Navbar.module.css";

const Navbar = () => {

  const { dispatchTheme, stateTheme } = useContext(GlobalContext);

  return (
    <header className="sticky-top">
      <nav
        className={`navbar navbar-expand-sm navbar-light bg-light`}
        aria-label="Third navbar example"
      >
        <div className="container">
          <a className={`navbar-brand ${styles.navbarBrand}`} href="/home">
            DH Odonto
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
               
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
    
                <a className="nav-link" href="/favs">
                  Favs
                </a>
              </li>
              <li className={`nav-item`}>
                <button
                  onClick={() => dispatchTheme({ type: "toggle_theme" })}
                  className={`btn btn-light${styles.btnStyle
                    }`}
                >
                  {stateTheme.background === "white" ? <span>☀</span> : <span>🌙</span>}

                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
