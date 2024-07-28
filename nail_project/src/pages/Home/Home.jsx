import Calendar from "../../components/Calendar/Calendar";
import Footer from "../../components/Contacts/Contacts";
import Header from "../../components/Header/Header";
import { Interesting } from "../../components/Interesting/Interesting";
import { Login } from "../../components/Login/Login";
import Nails from "../../components/Nails/Nails";
import Nav from "../../components/Navigation/Nav";
import { Register } from "../../components/Register/Register";
import Price from "../../components/Price/Price.jsx";
import moment from "moment";
import { useEffect, useState } from "react";
import { CalendarPage } from "../../components/CalendarPage/CalendarPage.jsx"
import { Form } from "../../components/Form/Form.jsx";

// const count = `/events?date_gte=${startDayQuery}&date_lte=${endDayQuery}`
// const totalDays = 42;

export const Home = () => {
  // const [today, setToday] = useState(moment());
  // const startDay = today.clone().startOf("month").startOf("week");
  // const endDay = moment().endOf("month").endOf("week");

  // const prevHandlerDay = () => {
  //   console.log("prev");
  //   setToday((prev) => prev.clone().subtract(1, "month"));
  // };
  // const todayHandlerDay = () => {
  //   console.log("today");
  //   setToday(moment());
  // };
  // const nextHandlerDay = () => {
  //   console.log("next");
  //   setToday((prev) => prev.clone().add(1, "month"));
  // };

  // const startDayQuery = startDay.clone().format("X");
  // const endDayQuery = endDay.clone().add(totalDays, 'days').format("X");
  // console.log("startDayQuery:", startDayQuery);
  // console.log("endDayQuery:", endDayQuery);


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
