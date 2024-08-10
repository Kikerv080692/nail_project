import styled from "styled-components";

export const All = styled.div`
width: 400px;
padding: 10px 25px;
`

export const MenuWrapper = styled.div`
 display: flex;
  justify-content: space-between;
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
export const WrapperWeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 10px;
  color: ${p => p.theme.colors.headers};
`;
export const CalendarGrid = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  padding-left: 10px;
  margin-bottom: 30px;
  
`;

export const MonitorData = styled.div`
border: 2px solid black;
border-radius: 8px;
padding: 10px;
background: green;
margin-bottom: 10px;
`