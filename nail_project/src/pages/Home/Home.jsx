
import Footer from "../../components/Contacts/Contacts";
import Header from "../../components/Header/Header";
import { Interesting } from "../../components/Interesting/Interesting";
import { Login } from "../../components/Login/Login";
import Nails from "../../components/Nails/Nails";
import Nav from "../../components/Navigation/Nav";
import { Register } from "../../components/Register/Register";
import Price from "../../components/Price/Price.jsx";
import { CalendarPage } from "../../components/CalendarPage/CalendarPage.jsx"




export const Home = () => {

  return (
    <div>
      <Register />
      <Login />
      <Nav />
      <Header />
      <CalendarPage />
      <Nails />
      <Interesting />
      <Price />
      <Footer />
    </div>
  );
};
