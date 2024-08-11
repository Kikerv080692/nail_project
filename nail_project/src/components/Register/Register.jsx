import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperation";
import { useLocation } from "react-router-dom";
import * as SC from "./Register.styled";

export const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
 
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
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
    dispatch(register({ name, email, password }));
    setEmail('')
    setName('')
    setPassword('')
  };
  return location.pathname === "/register" ? (
    <SC.Container>
      <SC.Form onSubmit={handleSubmit}>
        <SC.ContainerForInputLabel>
          <SC.FormInput
            id="Name"
            type="text"
            name="Name"
            placeholder=" "
            value={name}
            onChange={handleInputChange}
          />
          <SC.Label htmlFor="Name">Name</SC.Label>
        </SC.ContainerForInputLabel>
        <SC.ContainerForInputLabel>
          <SC.FormInput
            name="Email"
            type="text"
            placeholder=" "
            value={email}
            onChange={handleInputChange}
            id="Email"
          />
          <SC.Label htmlFor="Email">Email</SC.Label>
        </SC.ContainerForInputLabel>
        <SC.ContainerForInputLabel>
          <SC.FormInput
            id="Password"
            name="Password"
            type="text"
            placeholder=" "
            value={password}
            onChange={handleInputChange}
          />
          <SC.Label htmlFor="Password">Password</SC.Label>
        </SC.ContainerForInputLabel>
        <SC.Button type="submit">Register</SC.Button>
      </SC.Form>
    </SC.Container>
  ) : (
    <></>
  );
};
