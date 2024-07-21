import { useState } from "react";
import {useDispatch} from 'react-redux'
import { register } from "../../redux/auth/authOperation";
import { useLocation } from "react-router-dom";

export const Register = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation()
  console.log(location)
  const handleInputChange = (e) => {
    const { value, placeholder } = e.target;
    switch (placeholder) {
      case "Name":
        setName(value);
        return;
      case "Email":
        setEmail(value);
        return;
      case "Password":
        setPassword(value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({name, email, password}))
  };
  return (
    location.pathname === '/register' ? 
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleInputChange}
      />
      <input type="text" placeholder="Email" value={email} onChange={handleInputChange} />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={handleInputChange}
      />
      <button type="submit" >Register</button>
    </form> : <></>
  ); 
};
