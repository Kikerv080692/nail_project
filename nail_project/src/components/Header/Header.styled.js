import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  margin-bottom: 100px;
`;

export const ButtonBox = styled.div`
  padding-top: 100px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  Button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 8px;
    border: none;
    background-color: ${(p) => p.theme.colors.headers};
    color: white;
    box-shadow: 0 0 15px rgb(187, 24, 130);
    &:hover {
      background: ${(p) => p.theme.colors.backForHoverButton};
    }
  }
  @media (min-width: 767px) and (max-width: 1023px) {
  }
  @media (min-width: 1023px) {
    padding-top: 100px;
  }
`;

export const Foto = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  img {
    max-width: 330px;
    max-height: 330px;
    border-radius: 6px;
  }

  @media (min-width: 1023px) and (max-width: 1700px) {
    img {
      max-width: 700px;
      max-height: 700px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    img {
      max-width: 600px;
      max-height: 600px;
    }
  }
`;

export const TextWrapperH2 = styled.div`
  position: absolute;
  top: 380px;
  h2 {
    font-family: ${(p) => p.theme.fonts.fancy};
    font-size: 60px;
    color: ${(p) => p.theme.colors.textColors};
    padding-left: 12px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    top: 630px;
    h2 {
      padding-left: 50px;
    }
  }
  @media (min-width: 1023px) and (max-width: 1800px) {
    top: 720px;
    h2 {
      padding-left: 120px;
    }
  }
`;
export const TextWrapperH3 = styled.div`
  padding-top: 40px;
  padding-left: 20px;
  h3 {
    position: relative;
    padding-left: 30px;
    &::before {
      content: "";
      position: absolute;
      left: 10px;
      width: 4px;
      height: 100%;
      background-color: ${(p) => p.theme.colors.headers};
    }
  }
`;
