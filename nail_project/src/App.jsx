
import { Route, Routes } from "react-router-dom";

import { Register } from "./components/Register/Register.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { Login } from "./components/Login/Login.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "./hooks/useAuth.js";
import { refreshUser } from "./redux/auth/authOperation.js";





function App() {
  const {isRefreshing} = useAuth()
  const dispatch = useDispatch()

  

useEffect(() => {
  dispatch(refreshUser())
},[])
  return (
   
    isRefreshing ? <p>Page is refreshing...</p> :
    <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path = 'register' element={<Register/>}/>
     <Route path = 'login' element={<Login/>}/>
    
    </Routes>
    
  );
}

export default App;
