import React, { Component,useState } from 'react';

const TipCalculator = () => {
    const [Bill,setBill]=useState(0);
    const [Tipamt,setTipamt]=useState(0);

    const funsetBill=(amt)=>
    setBill((Bill)=>amt)
    const funsettip=(amtp)=>
    setTipamt(()=>amtp)
    return (
        <>
        <h1>Hello world</h1>
        <h1>bill is {Bill}</h1>
        <BillAmt onset={funsetBill} />
        <Tip  bill={Bill} onsettip={funsettip} />
        <TotalBill bill={Bill} Tipamt={Tipamt} />
        </>
      );
}
const BillAmt=({onset})=>
{
    const [description,setDescription]=useState("78")
    const [description2,setDescription2]=useState("78")
   
   
   return(<>
   <p>Enter the bill Amount</p>
   <form onSubmit={(e)=>
   {

       e.preventDefault()
       setDescription2((de)=>description)
    
        
    
      
    }
   
       
    }>
   <input type="text" name="" id=""   onChange={(e) => {
            onset(e.target.value)
            setDescription(() => e.target.value)}}  />
   <button>Submit</button>
   </form>
   {/* <h1> is {description}</h1>

   <h1> is2 {description2}</h1> */}
   </>)
}
const Tip=({ bill,onsettip})=>
{
    const [quantity, setquantity] = useState(0);
   return(<>
   <p>How much satisfied</p> 
   <form onSubmit={()=>onsettip(quantity)} ></form>
   <select onChange={(e) =>
    {
        // 
        // onsettip(e.target.value)
        // onsettip(((+e.target.value)/100)*bill)
       setquantity(((+e.target.value)/100)*bill)
       console.log(quantity);
      
    }
       
       } >
    
    <option value="0">0</option>
    <option value="10">10%</option>
    <option value="20">20%</option>
    <option value="30">30%</option>
    <option value="40">40%</option>
   </select>
   <h1>{quantity}</h1>
   </>)
}
const TotalBill=({bill,Tipamt})=>
{
   return(<>
   <p>The amount is {bill} and after tip the amount is {Tipamt}</p>
   </>)
}
export default TipCalculator;