import { useContext } from "react";
import DetailCard from "../Components/DetailCard";
import ThemeContext from "../context";

const Detail = ({ children }) => {
  const {theme} = useContext(ThemeContext);
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