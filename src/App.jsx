import React, { useState, useEffect } from 'react';
import SplitPane from 'react-split-pane';

import { Radio, Table } from 'antd';
import Calendar from './assets/components/Calendar';

const App = () => {
  const [menuWidth, setMenuWidth] = useState(260);
  const [isResizing, setIsResizing] = useState(false);
  const [footerOpen, setFooterOpen] = useState(false);
  const [arrayOfJobs, setArraysOfJobs] = useState([]);
  const [daysArray, setDaysArray] = useState([]);
  const [currentDay, setCurrentDay] = useState([]);

  //function for props from child to parent
  const handleArrayOfJobsAndDays = (jobs, days) => {
    console.log('Received jobs:', jobs);
    console.log('Recieved days:', days);

    setArraysOfJobs(jobs);
    setDaysArray(days);
  }

  useEffect(() => {
    console.log(arrayOfJobs);
    console.log(daysArray);
  }, [arrayOfJobs, daysArray]);


  const columns = [
    {
      title: 'JobID',
      dataIndex: 'JobID',
      key: 'JobID',
    },
    {
      title: 'Ship',
      dataIndex: 'Ship',
      key: 'Ship',
    },
    {
      title: 'MT',
      dataIndex: 'MT',
      key: 'MT',
    },
    {
      title: 'Commodity',
      dataIndex: 'Commodity',
      key: 'Commodity',
    },
    {
      title: 'Berth',
      dataIndex: 'Berth',
      key: 'Berth',
    },
    {
      title: 'Region',
      dataIndex: 'Region',
      key: 'Region',
    },
    {
      title: 'ETADate',
      dataIndex: 'ETADate',
      key: 'ETADate',
    },
    {
      title: 'DemRate',
      dataIndex: 'DemRate',
      key: 'DemRate',
    },
    {
      title: 'guaranteedRate',
      dataIndex: 'guaranteedRate',
      key: 'guaranteedRate',
    },
  ];


  const handlePaneResize = (newSize) => {
    setMenuWidth(newSize);
    setIsResizing(true);
  };

  const changeFooterHeight = () => {
    setFooterOpen(!footerOpen);
  }

  const usedCraneInstance=(i)=>{
return 
  setCurrentDay(i)

  }
  const cranes = [
    {
    id: 1,
    name: "Crane A",
    color: "aqua",
    date: (daysArray >= 2 && daysArray <= 7) || (daysArray >= 8 && daysArray <= 12),
  },
    { 
    id: 2,
    name: "Crane B",
    color: "blue",
    date: (daysArray >= 2 && daysArray <= 7) || (daysArray >= 8 && daysArray <= 12),
  },
    {
    id: 3,
    name: "Crane C",
    color: "green",
    date: (currentDay >= 2 && currentDay <= 7) || (currentDay >= 8 && currentDay <= 12),
  },
    {
    id: 4,
    name: "Crane D",
    color: "red",   
    date: (currentDay >= 3 && currentDay <= 8) || (currentDay >= 10 && currentDay <= 13),
  },
    {
    id: 5,
    name: "Crane E",
    color: "yellow",
    date: (currentDay >= 2 && currentDay <= 7) || (currentDay >= 8 && currentDay <= 12),
  },
    {
    id: 6,
    name: "Crane F",
    color: "orange",
    date: (currentDay >= 2 && currentDay <= 7) || (currentDay >= 8 && currentDay <= 12),
  },
    {
    id: 7,
    name: "Crane G",
    color: "purple",
    date: (currentDay >= 5 && currentDay <= 9)
  },
  {
    id: 8,
    name: "Crane H",
    color: "bisque",
    date: (currentDay >= 5 && currentDay <= 9) 
  },
  {
    id: 9,
    name: "Crane I",
    color: "green",
    date: (currentDay >= 5 && currentDay <= 9)  
  }
  ];
  // console.log(cranes.length);

console.log(currentDay);

  return (
    //UPPER HORIZONTAL PANE
    <SplitPane split="horizontal" primary="second" defaultSize={150}
      pane2Style={{ height: footerOpen ? 210 : 18 }}
    >
      <div>
        {/* INNER VERTICAL PANE */}
        <SplitPane split="vertical" defaultSize={menuWidth} onChange={handlePaneResize} minSize={260}
          pane1Style={{ zIndex: isResizing ? 2 : 1, height: isResizing ? "100%" : "100%", position: isResizing ? "absolute" : "relative", background: "#D3D3D3" }}
          pane2Style={{ height: "100%", overflowX: "auto", overflowY: "auto", marginLeft: "0 " }}>
          <div style={{ height: '100%' }}>

            <Table
              style={{ overflowX: "hidden", overflowY: "auto" }}
              pagination={false}
              dataSource={arrayOfJobs}
              columns={columns.map(column => ({
                ...column,
                title: <div style={{ padding: "22px", height: "45px", marginTop: "0" }}>{column.title}</div>,
              }))}
              rowClassName={() => 'custom-row'}
            />



          </div>
          {/* //INNER RIGHT VERTICAL PANE */}
          <div style={{ height: '100%', overflowX: "auto", }}>

            <Calendar
              onArrayOfJobsAndDaysChange={handleArrayOfJobsAndDays}
              cranes={cranes}
            // days={craneDays}
            />

          </div>
        </SplitPane>
      </div>
      {/* //LOWER HORIZONTAL PANE */}


      <div style={{ width: '100%', textAlign: 'center', background: "#D3D3D3" }}>
        <Radio.Button style={{ background: 'none', marginTop: '0', marginBottom: "2", border: "none", color: "black" }} value="to right" onClick={changeFooterHeight}>
          Λ
        </Radio.Button>

        <div>
        <div style={{ display: "grid", gap: "0", textAlign: "center",overflowX:"auto" }}>
          {cranes.map((crane) => (
            <div key={`Crane${crane.id}`} style={{ display: "flex", marginBottom: "0", background: "#D3D3D3" }}>
              <div style={{ width: "19.5%" }}>
                <span>Color: {crane.color}</span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${daysArray * 4}, 1fr)`,
                  gridTemplateRows: "repeat(3, auto)",
                  gap: "2px",
                  width: "80.5%",
                  // marginRight: "15px",
                  // marginLeft:"10px",
                  marginBottom: "0",
                  // overflowX: "auto",


                }}
              >
                {Array.from({ length: daysArray * 4 }, (_, i) => (

                  <div
                    key={i + 1}
                    style={{
                      backgroundColor: crane.color,
                      height: "15px",
                      width: "15px",
                      border: "1px solid gray"

                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        </div>

      </div>

    </SplitPane>

  );
};

export default App;





// usedCraneInstance(i)?"white":