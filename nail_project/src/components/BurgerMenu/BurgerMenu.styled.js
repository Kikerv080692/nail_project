import styled from 'styled-components';

export const Menu = styled.header `
  display: flex;
  min-height: 50px;
  width: 100%;
  /* position: fixed; */
  align-items: center;
  justify-content: space-between;
  background: ${(p) => p.theme.colors.headers};
  color: white;
  position: relative;
`;

export const Nav = styled.nav `
  display: flex;
  width: 380px;
  padding: 0 30px;
  
  & ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
    & li a {
      color: wheat;
    }
  }
  @media (max-width: 568px) {
    width: 100%;
    padding: 0;
    transition: all 0.5s ease 0s;
    & ul {
      display: none;
      ${p => p.isOpen && `
      margin-top: 50px;
      gap: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: all 0.3s ease 0s;
      border: 3px;
      `
  }
      & li {
        width: 100%;
        text-align: center;
        transition: all 0.3s ease-in-out;
        &:hover {
          background: green;
        }
      }
    }
  }
`;

export const Burger = styled.div `
  position: absolute;
  display: flex;
  z-index: 30;
  align-items: center;
  justify-content: flex-end;
  width: 25px;
  height: 25px;
  border: 10px ;
  cursor: pointer;

  & span {
    height: 3px;
    width: 80%;
    background: #fff;
    transform: scale(1);
  }
  &::before {
    content: '';
    position: absolute;
    height: 3px;
    width: 100%;
    background: #fff;
    top: 0px;
    transition: all 0.3s  ease 0s;
  }
  &::after {
    content: '';
    position: absolute;
    height: 3px;
    width: 100%;
    background: #fff;
    bottom: 0px;
    transition: all 0.3s  ease 0s;
  }
  ${(p) =>
    p.isOpen &&
    `
  span {
      transform: scale(0);
    }
    &::before {
    top: 50%;
      transform: rotate(-45deg) translate(0, -70%);
      
    }
    &::after {
    bottom: 50%;
      transform: rotate(45deg) translate(0, 70%);
      
    }
  `}

  @media (max-width: 568px) {
  ${p => p.isOpen && `
    top: -50px;
    right:0;
  
  `}
  }

  @media (min-width: 569px) and (max-width: 1600px) {
    display: none;
  }
`;
export const BurgerWrapper = styled.div `
    margin-right: 20px;
    position: relative;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    


  @media (max-width: 568px) {
  ${p => p.isOpen && `
    top: -50px;
    right:0;
  
  `}
  }
`