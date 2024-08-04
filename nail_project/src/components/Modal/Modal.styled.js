import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-image: url("../../../public/image/nailBackground.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 1024px) {
  }
`;

export const Inner = styled.div`
  position: absolute;
  color: black;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  max-width: 1200px;
  max-height: auto;
  background-color: ${(p) => p.theme.colors.modalBackground};

  @media (min-width: 1024px) {
    margin-top: 60px;
  top: 45%;

  }

  @media (min-width: 400px) {
    margin-top: 60px;
  }
`;

export const CloseBtn = styled.button`
width: 15px;
height: 15px;
  position: absolute;
  top: 5px;
  right: 3px;
  background:${(p) => p.theme.colors.backForHoverButton} ;
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  transition: 250ms linear;

  :hover {
    color: red;
    cursor: pointer;
  }
`;
