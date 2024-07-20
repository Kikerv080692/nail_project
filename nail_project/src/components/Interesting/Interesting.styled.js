import styled from "styled-components";

export const Section = styled.section`
 padding-top: 10px;
 padding-left: 20px;
`

export const Header = styled.h2`
margin-bottom: 20px;
color: ${p => p.theme.colors.headers};
font-family: ${p => p.theme.fonts.fancy};
font-size: ${p => p.theme.fontSizes.l}px;
h3 {
    font-size: ${p => p.theme.fontSizes.ml}px;
    margin-bottom: 10px;
    color: white;
    font-family: sans-serif;
}
p{
    color: white;
    font-size: ${p => p.theme.fontSizes.ml}px;
}
`

export const WrapperFirst = styled.div`
margin-bottom: 30px;
`
export const TextWrapper = styled.div`
   background-color: grey;
    border-radius: 4px;
    margin-bottom: 20px;
    margin-right: 20px;
    padding: 10px 10px;
    background: rgb(229, 18, 155);
`