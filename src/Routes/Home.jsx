import { useContext } from "react";
import Card from "../Components/Card";
import { GlobalContext } from "../context";

const Home = ({ children }) => {
  const { stateTheme } = useContext(GlobalContext);

  return (
    <>
      <div style={{ background: stateTheme.background, color: stateTheme.font }}>
        {children}
        <h1>Home</h1>

        <div className="card-grid container">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
