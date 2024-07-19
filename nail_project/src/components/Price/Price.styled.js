import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 80px;

h1 {
    font-family: ${(p) => p.theme.fonts.fancy};
    font-size: ${(p) => p.theme.space[5]}px;
    display: flex;
    justify-content: center;
    color: rgb(229, 18, 155);
}
`