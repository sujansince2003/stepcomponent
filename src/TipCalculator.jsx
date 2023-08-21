import React, {useState } from 'react';

const TipCalculator = () => {
    
    const [Bill,setBill]=useState("");
    const [percentage1,SetPercentage1]=useState(0)
    const [percentage2,SetPercentage2]=useState(0)
    const Tip=Bill *((percentage1+percentage2)/200);
function onreset()
{
    setBill("")
    SetPercentage1(0)
    SetPercentage2(0)
}
   return(<>
   <div className='consumer'>
   
   <BillInput Bill={Bill} onSetBill={setBill} />
   <SelectPercentage percentage={percentage1} onSelect={SetPercentage1} >How was your experience</SelectPercentage>
   <SelectPercentage percentage={percentage2} onSelect={SetPercentage2}>How was your friend  experience</SelectPercentage>

{
    Bill>0 && <>
     <Output Bill={Bill} Tip={Tip} />
   <Reset onreset={onreset} />
    </>
}
   
</div>
   </>)




}

const BillInput=({Bill,onSetBill})=>
{
    return(
        <>
        <label>How much is the Bill Amount?</label> 
          <input type="text" value={Bill} onChange={(e)=>onSetBill(e.target.value)}  />
          
        </>
    )
}
const SelectPercentage=({children,percentage,onSelect})=>
{
    return(
        <>
         
        <label>{children}</label>
     
      <select value={percentage} onChange={(e)=>onSelect(Number(e.target.value))} >
         
        <option value="0">Not Satisfied(0%)</option>
        <option value="10">okay(5%)</option>
        <option value="15">better(10%)</option>
        <option value="20">Best(15%)</option>


      </select>
        </>
    )
}
const Output=({Bill,Tip})=>
{
    return(
        <>
        
        <h3>You will pay NRS. {Number(Bill) + Tip}  ({Bill} +{Tip} Tip Amt )</h3>
        </>
    )
}
const Reset=({onreset})=>
{
    return(<>
    <button onClick={onreset} >Reset</button>
    </>)
}




export default TipCalculator;