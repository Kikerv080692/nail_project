import styled from "styled-components";

export const ContainerForInputLabel = styled.div`
  position: relative;
  width: 250px;
  height: 40px;
  margin-bottom: 20px;
 margin-left: 40px;
`;
export const FormInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #e1e5ee;
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: inherit;
  color: white;
  outline: none;
  padding:22px;
  background: none;
  &:hover {
    border-color: #adffff;
  }
  &:focus {
    border-color: #18ffff;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -10px;
    font-size: 14px;
    left: 12px;
  }
`;
export const Label = styled.label`
  position: absolute;
  left: 15px;
  top: 10px;
  padding: 0 10px;
  color: white;
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background-color: #060b23;
`;
