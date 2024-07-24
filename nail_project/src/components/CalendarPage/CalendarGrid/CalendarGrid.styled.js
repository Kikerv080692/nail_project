import styled from "styled-components";

export const WrapperWeekDays = styled.div`
 display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  background: #1e1f21;
  border-bottom: #404040;
  margin-bottom: 2px;
`

export const CalendarGrid = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  // grid-template-rows: repeat(6, 1fr);
  gap: 2px;
  background: #404040;
  // padding-top: 2px;
`