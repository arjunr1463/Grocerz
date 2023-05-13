import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { SidebarContext, Navmenu } from "./context/FranchiseSidebar";
import "./app.css";
import Index from "./pages/Index/Index";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import CustomerRegistration from "./pages/CustomerRegistration/CustomerRegistration";
import CustomerLogin from "./pages/CustomerLogin/CustomerLogin";
import FranchiseRegistration from "./pages/FranchiseRegistration/FranchiseRegistration";
import FranchiseLogin from "./pages/FranchiseLogin/FranchiseLogin";
import ComboOffers from "./pages/ComboOffers/ComboOffers";
import Offers from "./pages/Offers/Offers";
import FranchiseDashboard from "./pages/FranchiseDashboard/FranchiseDashboard";
import FranchiseNavbar from "./pages/FranchiseDashboard/FranchiseNavbar";
import FranchiseSideBar from "./pages/FranchiseDashboard/FranchiseSideBar";
import AllProducts from "./pages/FranchiseDashboard/AllProducts";
import OurPricechart from "./pages/FranchiseDashboard/OurPricechart";
import OurDeliverylocation from "./pages/FranchiseDashboard/OurDeliverylocation";
import PendingOrders from "./pages/FranchiseDashboard/PendingOrders";
import AcceptedOrders from "./pages/FranchiseDashboard/AcceptedOrders";
import InpreparationOrders from "./pages/FranchiseDashboard/InpreparationOrders";
import ShippedOrders from "./pages/FranchiseDashboard/ShippedOrders";
import CompletedOrders from "./pages/FranchiseDashboard/CompletedOrders";
import RejectedOrders from "./pages/FranchiseDashboard/RejectedOrders";
import FranchiseCombooffers from "./pages/FranchiseDashboard/ComboOffers";
import NormalUser from "./pages/FranchiseDashboard/NormalUser";
import PrimaryUser from "./pages/FranchiseDashboard/PrimaryUser";
import AllInvoice from "./pages/FranchiseDashboard/AllInvoice";
import PendingPayments from "./pages/FranchiseDashboard/PendingPayments";
import RequestProduct from "./pages/FranchiseDashboard/RequestProduct";
import RequestDeliverylocation from "./pages/FranchiseDashboard/RequestDeliverylocation";
import NewCombooffer from "./pages/FranchiseDashboard/NewCombooffer";
import FranchiseProfile from "./pages/FranchiseDashboard/FranchiseProfile";
import FranchisePasswordchange from "./pages/FranchiseDashboard/FranchisePasswordchange";
import Logout from "./components/FranchiseDashboard/Logout";
import CustomerProfile from "./pages/CustomerProfile/CustomerProfile";
import CustomerSidebar from "./pages/CustomerDashbord/CustomerSidebar";
import MyOrder from "./pages/CustomerDashbord/MyOrder";
import CustomerChangepassword from "./pages/CustomerDashbord/CustomerChangepassword";
import Menu from "./components/NavBar/Menu";

const Layout = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <Navmenu.Provider value={{ handleMenu }}>
      <NavBar />
      <Outlet />
      <Footer />
      {menu && <Menu close={setMenu} />}
    </Navmenu.Provider>
  );
};
const Layout1 = () => {
  const [action, setAction] = useState(false);
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    setAction(!action);
  };
  const handleMouseenter = () => {
    setHover(true);
  };
  const handleMouseleave = () => {
    setHover(false);
  };
  return (
    <SidebarContext.Provider
      value={{ action, hover, handleClick, handleMouseenter, handleMouseleave }}
    >
      <div className="h-screen flex flex-col overflow-hidden">
        <FranchiseNavbar />
        <div className="lg:hidden">
          <Logout />
        </div>
        <div className="hidden lg:flex ">
          <FranchiseSideBar />
          <div className="w-full  h-[95vh] bg-[#ececec] pb-[100px] overflow-y-scroll">
            <Outlet />
          </div>
        </div>
        <div className="lg:hidden h-[95vh] bg-[#ececec] overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </SidebarContext.Provider>
  );
};
const Layout2 = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col lg:flex-row gap-[25px] px-[10px] justify-center py-[50px]">
        <div className="flex h-full">
          <CustomerSidebar />
        </div>
        <div className="w-full lg:w-[65%] shadow-lg bg-white">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/customerregistration",
        element: <CustomerRegistration />,
      },
      {
        path: "/customerlogin",
        element: <CustomerLogin />,
      },
      {
        path: "/franchiselogin",
        element: <FranchiseLogin />,
      },
      {
        path: "/franchiseregistration",
        element: <FranchiseRegistration />,
      },
      {
        path: "/combo-offers",
        element: <ComboOffers />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout1 />,
    children: [
      {
        path: "/franchise-dashboard",
        element: <FranchiseDashboard />,
      },
      {
        path: "/franchise-allproducts",
        element: <AllProducts />,
      },
      {
        path: "/franchise-ourpricechart",
        element: <OurPricechart />,
      },
      {
        path: "/franchise-ourdeliverylocation",
        element: <OurDeliverylocation />,
      },
      {
        path: "/franchise-pendingorders",
        element: <PendingOrders />,
      },
      {
        path: "/franchise-acceptedorders",
        element: <AcceptedOrders />,
      },
      {
        path: "/franchise-inpreparationorders",
        element: <InpreparationOrders />,
      },
      {
        path: "/franchise-shippedorders",
        element: <ShippedOrders />,
      },
      {
        path: "/franchise-completedorders",
        element: <CompletedOrders />,
      },
      {
        path: "/franchise-rejectedorders",
        element: <RejectedOrders />,
      },
      {
        path: "/franchise-combooffers",
        element: <FranchiseCombooffers />,
      },
      {
        path: "/franchise-normaluser",
        element: <NormalUser />,
      },
      {
        path: "/franchise-primaryuser",
        element: <PrimaryUser />,
      },
      {
        path: "/franchise-allinvoice",
        element: <AllInvoice />,
      },
      {
        path: "/franchise-pendingpayments",
        element: <PendingPayments />,
      },
      {
        path: "/franchise-requestproduct",
        element: <RequestProduct />,
      },
      {
        path: "/franchise-requestdeliverylocation",
        element: <RequestDeliverylocation />,
      },
      {
        path: "/franchise-newcombooffer",
        element: <NewCombooffer />,
      },
      {
        path: "/franchise-profile",
        element: <FranchiseProfile />,
      },
      {
        path: "/franchise-passwordchange",
        element: <FranchisePasswordchange />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout2 />,
    children: [
      {
        path: "/customerprofile",
        element: <CustomerProfile />,
      },
      {
        path: "/customer-myorder",
        element: <MyOrder />,
      },
      {
        path: "/customer-changepassword",
        element: <CustomerChangepassword />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
