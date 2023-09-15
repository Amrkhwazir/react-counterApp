
import { useState } from 'react';
import './App.css';

function App() {
 const [counter, setCounter] = useState(0);
 const [ step, setStep] = useState(1)


 // count icreament
 function increament(){
  console.log(1);
  if(counter >= 0){
    setCounter(counter + 1)

  }
 }

 // count icreament
 function dicreament(){
  console.log(-1);

  if(counter > 0 ){
    setCounter(counter - 1)
  }
 }


 // step icreament
 function stepIncreament(){
  console.log(1);
  if(step >= 1){
    setStep(step + 1)

  }
 }

 // step icreament
 function stepDicreament(){
  console.log(-1);

  if(step > 1 ){
    setStep(step - 1)
  }
 }




  return (
    <div className="mainBox" style={{display: "flex",flexDirection: "column", justifyContent: "center",alignItems: "center", padding: "200px 0px",gap: "10px",textTransform: "capitalize" }}>

      <CounterBtn countInc={increament} countDic={dicreament} countValue={counter}  stepInc={stepIncreament} stepDic={stepDicreament} stepValue={step}/>
      </div>
  );
}


// counter button
function CounterBtn({countInc, countDic, countValue, stepDic, stepInc, stepValue}){
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const date = new Date();

  const getMonth = months[date.getMonth()];
  const getDays = weekDays[date.getDay()];
  const getDate = date.getDate();
  const getYear = date.getFullYear();
  
  return(
    <div style={{backgroundColor: "rosybrown", padding:"30px 10px", color: "white", minWidth: "300px", textAlign: "center"}}>
     
  <div style={{paddingLeft:"10px"}}> 
        <button style={{width: "60px", color: "white", backgroundColor: "black",fontSize: "16px", cursor: "pointer", border: "none", marginRight: "13px"}} onClick={stepDic}>-</button> step: {stepValue}
        <button style={{width: "60px", color: "white", backgroundColor: "black",fontSize: "16px", cursor: "pointer", border: "none", marginLeft: "20px"}} onClick={stepInc}>+</button>

 </div>
    
  <div style={{paddingLeft:"10px"}}> 
        <button style={{width: "60px", color: "white", backgroundColor: "black",fontSize: "16px", cursor: "pointer", border: "none", marginRight: "10px"}} onClick={countDic}>-</button>count: {countValue}
        <button style={{width: "60px", color: "white", backgroundColor: "black",fontSize: "16px", cursor: "pointer", border: "none", marginLeft: "15px"}} onClick={countInc}>+</button>

 </div>


 <div>
  
{countValue === 0 ? <p>today is {getDays} {getMonth} {getDate} {getYear}</p> : <p>{countValue * stepValue} days from today is {getDays} {getMonth} {getDate} {getYear}</p>}
 </div>
 </div>
  );
}


export default App;
