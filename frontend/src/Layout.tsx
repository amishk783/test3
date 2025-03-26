import { Outlet } from "react-router-dom";
import { Footer } from "./components/common/Footer";
import { Header } from "@/components/common/Header";
import { usePaywall } from "./store/PaywallProvider";
import { SubscriptionPopUp } from "./components/SubscriptionPopUp";

const Layout = () => {
  const { articleCounter } = usePaywall();
  return (
    <div className="w-full">
      {articleCounter > 2 && <SubscriptionPopUp />}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
