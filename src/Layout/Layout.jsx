import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


export const Layout = () => {
  return (
    <div className='all-dev' >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}