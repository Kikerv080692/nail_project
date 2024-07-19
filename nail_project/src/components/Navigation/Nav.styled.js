import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  margin-bottom: 50px;
  background: rgb(187, 24, 130);
  box-shadow: 0 0 15px rgb(187, 24, 130);
  h4 {
    margin: 0;
    cursor: pointer;
  }
  h4 a {
    color: white;
  }
`;
