import { useContext, useEffect } from "react";
import Card from "../Components/Card";
import ThemeContext from "../context";

const Home = ({children}) => {
  const {theme}= useContext(ThemeContext);

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);

  return (
    <>
    <div  style = {{ background : theme.background, color : theme.font}}>
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
