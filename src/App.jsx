import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import GlobalContextProvider from "./context";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <div>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </GlobalContextProvider>
    </>
  );
}

export default App;
