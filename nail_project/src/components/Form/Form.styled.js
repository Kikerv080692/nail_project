import styled from "styled-components";

export const WrapperForm = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: ${(p) => p.theme.colors.formBackground};
  border-radius: 10px;

  
`;

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 15px;
`;

export const Input = styled.input`
  margin-top: 20px;
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
  font-size: 24px;
  & span {
    padding-left: 10px;
  }
`;

export const Select = styled.select`
margin-top: 20px;
  padding: 10px;
  border: 1px solid ${(p) => p.theme.colors.inputBorder};
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
  border: 1px solid ${(p) => p.theme.colors.inputBorder};
  border-radius: 5px;
 
    &:focus {
    border-color: ${p => p.theme.colors.focusInput};
    outline: none;
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
  }
  
`
