import styled from "styled-components";

export const FormTimeWrapper = styled.form`
  width: 350px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;
  margin-bottom: 10px;
`;

export const TimeShowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: blue;
`;

export const Input = styled.input`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid ${(p) => p.theme.colors.inputBorder};
  border-radius: 5px;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${(p) => p.theme.colors.focusInput};
    outline: none;
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
  }
`;

export const Button = styled.button`
  background: ${(p) => p.theme.colors.backForButton};
  color: white;
  border: none;
  padding: 8px;
  border-radius: 6px;
  transition: background 0.3s, box-shadow 0.3s;

  &:hover {
    background: ${(p) => p.theme.colors.backForHoverButton};
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
    cursor: pointer;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: ${p => p.isCheckTime ? '2px solid red' : 'none'}
`;


export const DeleteButton = styled.button`
  padding: 5px 5px;
  font-size: 16px;
  color: white;
  background-color: #ff4c4c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff1a1a;
  }
`;

export const TimeDisplay = styled.div`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;
