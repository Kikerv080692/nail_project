import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authOperation";
import { NavLink, useLocation } from "react-router-dom";
import * as SC from './Login.styled'

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLocation = useLocation()
 
const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
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
      setEmail('')
      setPassword('')
  }

return (
  isLocation.pathname === '/login' ?
  <SC.Container>
  <SC.Form onSubmit={handleSubmit} >
  <SC.ContainerForLabel>
            <SC.FormInput
              type="text"
              autoComplete="off"
              placeholder=" "
              name="Email"
              id="Email"
              value={email}
              onChange={handleInputChange}
            />
            <SC.Label htmlFor="Email" >
              Email
            </SC.Label>
          </SC.ContainerForLabel>
          <SC.ContainerForLabel >
            <SC.FormInput
              type="password"
              autoComplete="off"
              placeholder=" "
              name="Password"
              id="Password"
              value={password}
              onChange={handleInputChange}
            />
            <SC.Label htmlFor="Password" >
              Password
            </SC.Label>
          </SC.ContainerForLabel>
    <SC.Button type='submit'>Log in</SC.Button>
  </SC.Form>
  <NavLink to="/">Home</NavLink>
  </SC.Container> : <></>
)
}



