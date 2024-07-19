import { Outlet } from "react-router-dom";
import Footer from "../Contacts/Contacts";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
