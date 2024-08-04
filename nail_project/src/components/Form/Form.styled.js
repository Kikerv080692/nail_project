import styled from "styled-components";

export const WrapperForm = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: ${(p) => p.theme.colors.formBackground};
  border-radius: 20px;
`;

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 10px;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid ${(p) => p.theme.colors.inputBorder};
  border-radius: 5px;
  &:focus {
    &:focus {
    border-color: ${p => p.theme.colors.focusInput};
    outline: none;
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
  }
  }
  @media (min-width: 1024px) {
    margin-top: 10px;
    
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



export const WrapperMonthDay = styled.div`
  font-family: ${(p) => p.theme.fonts.fancy};
  color: ${(p) => p.theme.colors.headers};
  border-color: ${p => p.theme.colors.input};
  font-size: 24px;
  margin-bottom: 10px;
  & span {
    padding-left: 10px;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid ${(p) => p.theme.colors.input};
  border-radius: 5px;
  
    &:focus {
    border-color: ${p => p.theme.colors.focusInput};
    outline: none;
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
  }
`
export const TextArea = styled.textarea`
margin-top: 20px;
  padding: 10px;
  border: 1px solid ${(p) => p.theme.colors.input};
  border-radius: 5px;
 
    &:focus {
    border-color: ${p => p.theme.colors.focusInput};
    outline: none;
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
  }
  
`
export const ContainerForInputLabel = styled.div`
  position: relative;
  width: 310px;
  height: 40px;
  margin-bottom: 15px;
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

export const P = styled.p`
width: 300px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
`