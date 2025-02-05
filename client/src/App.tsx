import { Outlet } from "react-router";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Home/Footer";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App;
