import styled from "styled-components";

export const Header = styled.div`
h2{
    font-family: ${p => p.theme.fonts.fancy};
    color: rgb(229, 18, 155);
}
`

export const ButtonBox = styled.div`
padding-top: 20px;
margin-bottom: 20px;
Button {
    display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  background-color: ${p => p.theme.colors.headers};
  color: white;
  box-shadow: 0 0 15px rgb(187, 24, 130);
}
`