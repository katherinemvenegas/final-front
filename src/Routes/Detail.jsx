import { useContext } from "react";
import DetailCard from "../Components/DetailCard";
import { GlobalContext } from "../context";

const Detail = ({ children }) => {
  const {theme} = useContext(GlobalContext);
  return (
    <>
      <div style={{ background: theme.background, color: theme.font }}>
        {children}
        <DetailCard />
      </div>
    </>
  )
}

export default Detail