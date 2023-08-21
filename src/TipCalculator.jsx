import React, { Component,useState } from 'react';

const TipCalculator = () => {
    const [Bill,setBill]=useState("")

   return(<>
   
   <BillInput Bill={Bill} onSetBill={setBill} />
   <SelectPercentage>How was your experience</SelectPercentage>
   <SelectPercentage>How was your friend  experience</SelectPercentage>
   
   <Output Bill={Bill} />
   <Reset />
   </>)




}

const BillInput=({Bill,onSetBill})=>
{
    return(
        <>
        <label>How much is the Bill Amount</label> 
          <input type="text" value={Bill} onChange={(e)=>onSetBill(e.target.value)}  />
          <br />
        </>
    )
}
const SelectPercentage=({children})=>
{
    return(
        <>
         <br />
        <label>{children}</label>
        <br />
      <select >
        <option value="0">Not Satisfied</option>
        <option value="10">okay</option>
        <option value="15">better</option>
        <option value="20">Best</option>


      </select>
        </>
    )
}
const Output=({Bill})=>
{
    return(
        <>
        
        <h3>You will pay {Bill} (x+y tip )</h3>
        </>
    )
}
const Reset=()=>
{
    return(<>
    <button>Reset</button>
    </>)
}




export default TipCalculator;