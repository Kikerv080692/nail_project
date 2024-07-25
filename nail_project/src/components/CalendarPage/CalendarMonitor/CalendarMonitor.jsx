import * as SC from './CalendarMonitor.styled.js'

export const CalendarMonitor = (
 { prevHandler,
  nextHandler,
  todayHandler,
  today}
) => {
  return (
    <div>
      <SC.MenuWrapper>
        <SC.MonthWrapper>
          <span>{today.format("MMMM")}</span>
          <span>{today.format("YYYY")}</span>
        </SC.MonthWrapper>
        <SC.ButtonWrapper>
          <SC.Button type="button" onClick={prevHandler}>
          &lt;
          </SC.Button>
          <SC.Button type="button" onClick={todayHandler}>
            Today
          </SC.Button>
          <SC.Button type="button" onClick={nextHandler}>
          &gt;
          </SC.Button>
        </SC.ButtonWrapper>
      </SC.MenuWrapper>
    </div>
  );
};
