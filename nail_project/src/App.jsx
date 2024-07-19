
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Register } from "./components/Register/Register.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { Login } from "./components/Login/Login.jsx";


// console.log(moment())
// console.log(moment().startOf('month').startOf('week'))
// console.log(moment.updateLocale('en', {week: {dow: 1}} ))
// console.log(moment().startOf('month').startOf('week'))
// console.log(moment().endOf('month').endOf('week'))
// console.log(moment().add(1, 'day')) // добавляє один день
// console.log(moment().subtract(1, 'day')) // забирає один день
// console.log(startDay.format("YYYY-MM-DD"));
// console.log(endDay.format("YYYY-MM-DD"));

// const calendar = [];
// const day = startDay.clone();

// while (!day.isAfter(endDay)) {
//   console.log(day);
//   calendar.push(day.clone());
//   day.add(1, "day");
// }
const totalDays = 42;
const url = "http://localhost:3000";

function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path = 'register' element={<Register/>}/>
     <Route path = 'login' element={<Login/>}/>
    </Routes>
    
  );
}

export default App;
