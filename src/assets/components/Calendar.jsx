import React, { useState, useEffect } from "react";

const Calendar = ({ onArrayOfJobsAndDaysChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [stateArrOfJobs, setStateArrOfJobs] = useState([]);
  const [DaysForMonth,setDaysForMonth]=useState([]);




  useEffect(() => {
    const updateArrayOfJobsAndDays = () => {
      const jobs = jobss
      onArrayOfJobsAndDaysChange(jobs,daysInMonth);
      setStateArrOfJobs(jobs);
      console.log(jobs);

setDaysForMonth(daysInMonth)
//console.log(DaysForMonth);

    };
    updateArrayOfJobsAndDays();
  }, [currentDate]);
  // const propCranes=cranes;

  const jobss = [
    {
      JobID: 1,
      startDate: 2,
      endDate: 7,
      color: "green",
      Ship: "King Layer",
      MT: "1000",
      Commodity: "Bags",
      Berth: "55-U",
      Region: "Reserve",
      ETADate: "01/11/24",
      DemRate: "50",
      guaranteedRate: '100',
      crane: [
        {
          colorId: 1,
          color: "aqua"
        },
        {
          colorId: 2,
          color: "blue",
        },
        {
          colorId: 3,
          color: "green"
        }
      ]

    },
    {
      JobID: 2,
      startDate: 3,
      endDate: 7,
      color: "red",
      Ship: "King Layer",
      MT: "1000",
      Commodity: "Bags",
      Berth: "55-U",
      Region: "Reserve",
      ETADate: "01/11/24",
      DemRate: "50",
      guaranteedRate: '100',
      crane: [
        {
          colorId: 4,
          color: "red"
        },
        {
          colorId: 5,
          color: "yellow",
        },
        {
          colorId: 6,
          color: "orange"
        }]
    },
    {
      JobID: 3,
      startDate: 5,
      endDate: 9,
      color: "red",
      Ship: "King Layer",
      MT: "1000",
      Commodity: "Bags",
      Berth: "55-U",
      Region: "Reserve",
      ETADate: "01/11/24",
      DemRate: "50",
      guaranteedRate: '100',
      crane: [
        {
          colorId: 7,
          color: "purple"
        },
        {
          colorId: 8,
          color: "pink",
        },
        {
          colorId: 9,
          color: "green"
        }]
    },
    {
      JobID: 4,
      startDate: 8,
      endDate: 12,
      color: "brown",
      Ship: "King Layer",
      MT: "1000",
      Commodity: "Bags",
      Berth: "55-U",
      Region: "Reserve",
      ETADate: "01/11/24",
      DemRate: "50",
      guaranteedRate: '100',
      crane: [
        {
          colorId: 10,
          color: "aqua"
        },
        {
          colorId: 11,
          color: "blue",
        },
        {
          colorId: 12,
          color: "green"
        }
      ]
    },
    {
      JobID: 5,
      startDate: 10,
      endDate: 13,
      color: "gray",
      Ship: "King Layer",
      MT: "1000",
      Commodity: "Bags",
      Berth: "55-U",
      Region: "Reserve",
      ETADate: "01/11/24",
      DemRate: "50",
      guaranteedRate: '100',
      crane: [
        {
          colorId: 13,
          color: "red"
        },
        {
          colorId: 14,
          color: "yellow",
        },
        {
          colorId: 15,
          color: "orange"
        }
      ]
    }
  ];
  // const cranes = [
  //   { id: 1, name: "Crane A", color: "aqua" },
  //   { id: 2, name: "Crane B", color: "blue" },
  //   { id: 3, name: "Crane C", color: "green" },
  //   { id: 4, name: "Crane D", color: "red" },
  //   { id: 5, name: "Crane E", color: "yellow" },
  //   { id: 6, name: "Crane F", color: "orange" },
  //   { id: 7, name: "Crane G", color: "purple" },
  //   { id: 8, name: "Crane H", color: "bisque" },
  //   { id: 9, name: "Crane I", color: "green" }
  // ];
  const isJob = (day, job) => {
    return day >= job.startDate && day <= job.endDate;
  };
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const getDayOfWeek = (year, month, day) => {
    return new Date(year, month, day).toLocaleDateString("en-US", {
      weekday: "short",
    });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", background: "#D3D3D3" }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button style={buttonStyle} onClick={handlePrevMonth}>
          &lt;
        </button>
        <h2
          style={{
            fontSize: "15px",
            color: "#333",
            background: "#80808080",
            padding: "14px",
          }}
        >
          {currentDate.toLocaleString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </h2>
        <button style={buttonStyle} onClick={handleNextMonth}>
          &gt;
        </button>
        <button
          style={{
            background: "blue",
            padding: "8px",
            color: "white",
            borderRadius: "10%",
            margin: "6px",
          }}
        >
          Add Job
        </button>
      </div>
      <div
        style={{
          display: "grid",
          height: "100vh",
          gridTemplateColumns: `repeat(${daysInMonth}, 1fr)`,
          gap: "1px",
          overflowX: "auto",
        }}
      >
        {Array.from({ length: daysInMonth }, (_, index) => {
          const dayOfMonth = index + 1;
          const dayOfWeek = getDayOfWeek(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            dayOfMonth
          );

          return (
            <div
              key={dayOfMonth}
              style={{
                border: "1px solid gray",
                padding: "3px",
                height: "100%",
              }}
            >
              {dayOfWeek}
              <br />
              {dayOfMonth}
              <div
                style={{
                  borderBottom: "2px solid gray",
                  margin: "10px 0",
                  background: "gray"
                }}
              ></div>
              {/* {console.log("jobs data:", stateArrOfJobs)} */}
              {stateArrOfJobs.map((job) => (
                <div
                  key={job.JobID}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "1px",
                    gridTemplateRows: "repeat(3, auto)",
                    marginTop: "10px",
                  }}
                >
                  {Array.from({ length: 4 * 3 }, (_, i) => {
                    const craneIndex = Math.floor(i / 4); 
                    const crane = job.crane[craneIndex] 

                    return (
                      <div
                        key={i + 1}
                        style={{
                          backgroundColor: isJob(dayOfMonth, job) ? crane?.color || "white" : "white",
                          height: "15px",
                          width: "15px",
                          border: "1px solid gray",
                        }}
                      ></div>
                    );
                  })}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: "#80808080",
  color: "white",
  border: "none",
  padding: "2px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "14px",
};

export default Calendar;
