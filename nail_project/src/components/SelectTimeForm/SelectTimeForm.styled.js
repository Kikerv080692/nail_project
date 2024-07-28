import styled from "styled-components";

export const FormTimeWrapper = styled.form`
width: 250px;
display: flex;
justify-content: center;
flex-direction: column;
gap: 10px;
padding: 0 20px;
`

export const TimeShowWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
color: blue;
`

export const Input = styled.input`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid ${p => p.theme.colors.inputBorder};
  border-radius: 5px;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${p => p.theme.colors.focusInput};
    outline: none;
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
  }
`;

export const Button = styled.button`
  background: ${(p) => p.theme.colors.backForButton};
  color: white;

  &:hover {
    background: ${(p) => p.theme.colors.backForHoverButton};
  }
`;
