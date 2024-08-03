import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 80px;
    border: 2px solid white;
    border-radius: 10px;
    width: 400px;
    margin-left: 15px;
    padding-bottom: 30px;


h1 {
    font-family: ${(p) => p.theme.fonts.fancy};
    font-size: ${(p) => p.theme.space[5]}px;
    display: flex;
    justify-content: center;
    color: ${p => p.theme.colors.headers};
}
`