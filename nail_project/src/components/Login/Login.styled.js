import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 430px;
  height: 100vh;
  background-image: url('../../../public/image/nailBackground.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-left: 15px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid rgba(255, 105, 180, 0.6);
  transition: box-shadow 0.3s ease-in-out;
  &:focus {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.6);
      border: 1px solid rgba(255, 105, 180, 0.6);
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease 0.1s;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5);
  }
`;

export const ContainerForLabel = styled.div`
  position: relative;
  width: 350px;
  height: 40px;
  margin-bottom: 20px;
`;
export const FormInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 105, 180, 0.6);
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: inherit;
  color: green;
  outline: none;
  padding: 10px;
  background: none;
  &:hover {
    border-color: #adffff;
  }
  &:focus {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.6);
      border: 1px solid rgba(255, 105, 180, 0.6);
    outline: none;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -9px;
    font-size: 14px;
    left: 20px;
  }
`;
export const Label = styled.label`
  position: absolute;
  left: 20px;
  top: 12px;
  color: gray;
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background-color: #f9f9f9;
`;
