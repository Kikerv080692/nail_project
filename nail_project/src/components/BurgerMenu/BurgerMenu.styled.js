import styled from 'styled-components';

export const Menu = styled.header`
  display: flex;
  min-height: 70px;
  align-items: center;
  justify-content: space-between;
  background: ${(p) => p.theme.colors.headers};
  color: white;
`;

export const Nav = styled.nav`
  /* display: flex; */
  width: 380px;
  padding: 0 30px;
  & ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    & li a {
      color: wheat;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    
    & ul {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
        padding-top: 80px;
      & li {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export const Burger = styled.div`
  margin-right: 20px;
  position: relative;
  display: flex;
  z-index: 30;
  align-items: center;
  justify-content: flex-end;
  width: 30px;
  height: 15px;
  padding: 10px 0;
  cursor: pointer;
  & span {
    height: 2px;
    width: 80%;
    background: #fff;
    transform: scale(1);
  }
  &::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 80%;
    background: #fff;
    top: 0;
    transition: all 0.3s ease 0s;
  }
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 80%;
    background: #fff;
    bottom: 0;
    transition: all 0.3s ease 0s;
  }
  ${(p) =>
    p.isOpen &&
    `
  span {
      transform: scale(0);
    }
    &::before {
    top: 50%;
      transform: rotate(-45deg) translate(0, -50%);
    }
    &::after {
    bottom: 50%;
      transform: rotate(45deg) translate(0, 50%);
    }
  `}
  &::part(circle) {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 10px solid #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    &::part(circle) {
      opacity: 1; 
      transform: translate(-50%, -50%) scale(1.2); 
    }
  `}
  @media (max-width: 768px) {
  }
  @media (min-width: 769px) and (max-width: 1600px) {
    display: none;
  }
`;
