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
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid rgba(255, 105, 180, 0.6);
  transition: box-shadow 0.3s ease-in-out;
  &::placeholder {
    transition: opacity 0.5s;
  }
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

  &:hover {
    background-color: #45a049;
  }
`;
