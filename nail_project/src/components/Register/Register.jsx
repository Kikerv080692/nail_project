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
  console.log(location);
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
    dispatch(register({ name, email, password }));
  };
  return location.pathname === "/register" ? (
    <SC.Container>
      <SC.Form onSubmit={handleSubmit}>
        <SC.Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
        <SC.Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <SC.Input
          type="text"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        <SC.Button type="submit">Register</SC.Button>
      </SC.Form>
    </SC.Container>
  ) : (
    <></>
  );
};
