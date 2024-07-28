import styled from "styled-components";



export const MenuWrapper = styled.div`
 display: flex;
  justify-content: space-between;
  /* background: ${p => p.theme.colors.backForCalendar}; */
  /* color: ${p => p.theme.colors.backForColor}; */
  padding: 12px 10px;
  align-items: center;
`

export const MonthWrapper = styled.div`
color: ${p => p.theme.colors.headers};
font-family: ${p => p.theme.fonts.fancy};
display: flex;
gap: 8px;
span {
    font-size: ${(p) => p.theme.fontSizes.ml}px;
}
`

export const ButtonWrapper = styled.div`

 display: flex;
 align-items: center;
`

export const Button = styled.button`
border: unset;
  background: ${p => p.theme.colors.backForCalendarButton};
  border-radius: 4px;
  color: ${p => p.theme.colors.headers};
  margin-right: 2px;
  padding: 5px 5px;
  cursor: pointer;
  &:hover{
    background: ${p => p.theme.colors.backdropBackgroundHover};
    color: white;
  }
`