import { useState } from "react";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  }
return (
  <form onSubmit={handleSubmit} >
    <input type="text" placeholder="Email" value={email} onChange={handleInputChange} />
    <input type="text" placeholder="Password" value={password} onChange={handleInputChange} />
    <button type='submit'>Log in</button>
  </form>
)
}



