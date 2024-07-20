import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authOperation";
import { NavLink } from "react-router-dom";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const dispatch = useDispatch()
  const handleInputChange = (e) => {
    const { value, placeholder } = e.target;
    switch (placeholder) {
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
      e.preventDefault()
      dispatch(login({email, password}))
  }

return (
  <>
  <form onSubmit={handleSubmit} >
    <input type="text" placeholder="Email" value={email} onChange={handleInputChange} />
    <input type="text" placeholder="Password" value={password} onChange={handleInputChange} />
    <button type='submit'>Log in</button>
  </form>
  <NavLink to="/">Home</NavLink>
  </>
)
}



