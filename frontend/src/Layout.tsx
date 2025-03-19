import { Outlet } from "react-router-dom";
import { Footer } from "./components/common/Footer";
import { Header } from "@/components/common/Header";

const Layout = () => {
  
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
