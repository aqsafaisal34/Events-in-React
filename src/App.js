import React, { useState } from 'react';
import "./App.css";

function App() {
  let purple = 	"#9F2B68";
  const [bg,setBg]=useState(purple);
  const [name,setName]=useState("Click Me")

  const bgChange = ()=>{
    // console.log("Clicked")
    let red = "#FF0000";
    setBg(red);
    setName("Clicked");
  }
  const bgBack =()=>{
    setBg(purple);
    setName("Click Me");
  }
 
  return (
   
    <>
    <div style={{backgroundColor:bg}}>
    {/* React Events 
    we use event in react, in event name we use camelcase
    click button to change the backgroung color and double click for remove changes
     */}
     <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
    </div>
    </>

  )
}

export default App
