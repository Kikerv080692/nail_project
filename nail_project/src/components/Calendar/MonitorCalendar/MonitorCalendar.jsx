import React from 'react'
import './MonitorCalendar.scss'


function MonitorCalendar({today, prevHandlerDay, nextHandlerDay, todayHandlerDay}) {
  return (
    <div className='menu-wrapper'>
      <div className='month'>
        <span><b>{today.format('MMMM')}</b></span>
        <span>{today.format('YYYY')}</span>
      </div>
      <div className='button-wrapper'>
        <button onClick={prevHandlerDay}> &lt;</button>
        <button onClick={todayHandlerDay}><b>Today</b></button>
        <button onClick={nextHandlerDay}> &gt;</button>
      </div>
    </div>
  )
}

export default MonitorCalendar
