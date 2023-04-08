import { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { GlobalContext } from "../context";

const Home = ({children}) => {
  const {stateTheme}= useContext(GlobalContext);

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);

  return (
    <>
    <div  style={{  background: stateTheme.background, color: stateTheme.font}}>
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
