import React, { Component,useState } from 'react';

const TipCalculator = () => {
    
   return(<>
   
   <BillInput />
   <SelectPercentage>How was your experience</SelectPercentage>
   <SelectPercentage>How was your friend  experience</SelectPercentage>
   
   <Output />
   <Reset />
   </>)




}

const BillInput=()=>
{
    return(
        <>
        <label>How much is the Bill Amount</label> 
          <input type="text"  />
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
const Output=()=>
{
    return(
        <>
        
        <h3>You will pay x (x+y tip )</h3>
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