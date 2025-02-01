import { Outlet } from "react-router";
import Navbar from "./pages/Navbar/Navbar";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default App;
