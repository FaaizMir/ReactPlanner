import React from "react";



const Calendar2=()=>{
const currentDate = new Date();

const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1,0);

return(
    <>
     
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="nav-button">&lt;</button>
        <h2 className="month-year">
          {currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
        </h2>
        <button className="nav-button">&gt;</button>
      </div>
      <div className="days-of-week">
        <div className="day">Sun</div>
        <div className="day">Mon</div>
        <div className="day">Tue</div>
        <div className="day">Wed</div>
        <div className="day">Thu</div>
        <div className="day">Fri</div>
        <div className="day">Sat</div>
      </div>
      <div className="calendar-days">
        {daysArray.map((day) => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>
    </div>
    </>
)

        }
export default Calendar2;