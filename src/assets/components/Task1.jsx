import React from "react";
import SplitPane from "react-split-pane";

const Task1=()=>
         {
return(
<>
<SplitPane split="vertical">
<div style={{background:"bisque",height:"50%" }}>rwgw</div>
<SplitPane split="horizontal">
  <div style={{background: "green",width:"100%" }}>utfdu</div>
  <div style={{background: "blue" }}>ert</div>
  <SplitPane split="horizontal">
  <div style={{background:"bisque"}}>wef</div>
  </SplitPane>
</SplitPane>
</SplitPane>
<SplitPane split="horizontal">
<div style={{background:"red"}}>dfyr</div>
<div style={{background:"yellow"}}>uvfy</div>
</SplitPane>
<SplitPane split="vertical">
<div style={{background:"purple",height:"30%"}}>dfyr</div>
<div style={{background:"pink"}}>uvfy</div>
</SplitPane>

</>

);
};

export default Task1;