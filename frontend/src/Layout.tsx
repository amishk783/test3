import { Outlet } from "react-router-dom";
import { Footer } from "./components/common/Footer";
import { Header } from "@/components/common/Header";

const Layout = () => (
  <div className="">
    <Header />
    <Outlet /> {/* This is where child routes will render */}
    <Footer />
  </div>
);

export default Layout;
