import styled from "styled-components";

export const CurrentDay = styled.div`
 height: 20px;
  width: 20px;
  border-radius: 50%;
  background: ${p => p.theme.colors.headers};
  display: flex;
  justify-content: center;
  align-items: center;
  `
export const CellWrapper = styled.div`
  min-width: 15px;
  min-height: 15px;
  cursor: pointer;
  color: ${p => p.$isWeekend ? 'red' : 'black'};
`