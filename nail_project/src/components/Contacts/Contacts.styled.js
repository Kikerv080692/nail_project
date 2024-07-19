import styled from "styled-components";

export const Footer = styled.footer`
   display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    margin-bottom: 20px;
    padding-top: 20px;
h1{
    font-family: ${(p => p.theme.fonts.fancy)};
    font-size: ${p => p.theme.space[5]}px;
    color:${p => p.theme.colors.headers};
}
` 
export const IMG = styled.div`
  display: flex;
    flex-direction: row;
    gap: 25px;
    padding-top: 20px;
`