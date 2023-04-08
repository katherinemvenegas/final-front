import { useContext } from "react";
import DetailCard from "../Components/DetailCard";
import { GlobalContext } from "../context";

const Detail = ({ children }) => {
  const {stateTheme} = useContext(GlobalContext);
  return (
    <>
      <div style={{  background: stateTheme.background, color: stateTheme.font}}>
        {children}
        <DetailCard />
      </div>
    </>
  )
}

export default Detail