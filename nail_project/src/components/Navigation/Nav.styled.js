import styled from 'styled-components';


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
  height: 60px;
  background: ${(p) => p.theme.colors.headers};
  transition: all 0.3s;

@media(max-width: 568px){
  justify-content: right;
  gap: 20px;
  padding-right: 20px;

  ${({$isNavOpen}) => $isNavOpen && `
   display: flex;
   align-items: flex-start;
  padding-top: 25px;
  height: 300px;
  background: ${(p) => p.theme.colors.headers};
  ` }
}

  h4 {
    margin: 0;
    cursor: pointer;
    position: relative;
    &:hover::after {
      transform: scaleX(1);
    }
    &::after {
      content: '';
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
export const Navmenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap:35px;
  

@media(max-width: 568px){
  display: none;
  ${({$isNavOpen}) => $isNavOpen && `
  display: flex;
  flex-direction: column;
  padding-top:80px;
  background: ${(p) => p.theme.colors.headers};
  ` }
}`

export const DIV = styled.div`
  display: flex;
  max-height: 200px;
`;

export const A = styled.a`
  display: none;

  @media (max-width: 568px) {
    display: inline-block;
   
    padding: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.15s linear;

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  ${({ $isNavOpen }) =>
    $isNavOpen &&
    ` .menuicon {
        color: white;

       .menuicon__bar {
        transform: rotate(0deg);
        transform-origin:50% 50%;
        transition: transform .5s ease-in-out; 
      }
        .menuicon__circle  {
          stroke-dashoffset:0;
          stroke-dasharray: 144;
          opacity: 1;
        }
        .menuicon__bar:nth-child(1),
       .menuicon__bar:nth-child(4) {
          opacity: 0;
        }
        .menuicon__bar:nth-child(2) {
          transform: rotate(45deg) ;
        }
       .menuicon__bar:nth-child(3) {
          transform: rotate(-45deg) ;
        }
       
      }
    `}
`;

export const MenuIcon = styled.svg`
  display: block;
  cursor: pointer;
  color: white;

  .menuicon__bar,
  .menuicon__circle {
    fill: none;
    stroke: currentColor;
    stroke-width: 3;
    stroke-linecap: round;
  }

  .menuicon__bar {
    transition: transform 0.25s ease-in-out;
  }
  .menuicon__circle {
    transition: stroke-dashoffset 1s linear .1s;
    stroke-dasharray: 144;
    stroke-dashoffset: 144 ;
    opacity: 0; 
    
  }
`;
