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
  box-shadow: 0 0 15px rgb(187, 24, 130);
  margin-bottom: 50px;
  height: 50px;
  background: ${(p) => p.theme.colors.headers};

  h4 {
    margin: 0;
    cursor: pointer;
    position: relative;
    &:hover::after {
      transform: scaleX(1);
    }
    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${(p) => p.theme.colors.hoverLink};
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
    }
  }
  h4 a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease; 
    &:hover {
      color: #00ffff; 
    }
  }
`;
