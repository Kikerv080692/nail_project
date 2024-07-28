import styled from "styled-components";

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
  grid-template-rows: repeat(6, 1fr);
  gap: 5px;
  padding-left: 10px;
`;
