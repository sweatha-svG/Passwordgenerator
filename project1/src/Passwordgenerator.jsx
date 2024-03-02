import React from "react";
import { useState } from "react";
export   const Passwordgenerator = () => {
    const[length,setLength]=useState(8);
    const[lower,setLower]=useState(true);
    const[upper,setUpper]=useState(true);
    const[number,setNumber]=useState(true);
    const[symbol,setSymbol]=useState(true);
    const[password,setPassword]=useState(" ");
    const generatepassword=()=>{
    let charset='';

    if(upper) charset+= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(lower) charset+= 'abcdefghijklmnopqrstuvwxyz';

    if(symbol) charset += "!@#$%^&*()'_+";
    if(number) charset+="0123456789";
    let generatepassword= ' ';
        for(let i=0;i<length;i++){
            const randomIndex = Math.floor(Math.random()*charset.length);
            generatepassword+=charset[randomIndex];
    }
    setPassword(generatepassword);
}
    const copy=()=>{
        navigator.clipboard.writeText(password);// for copy 
        alert("password copied");
}
return(
    <div className="password">
     <h2>strong password</h2> 
     <div className="input-group">
    <label htmlFor="num">Password Length:</label> 
     <input type='number' id='num'  value={length} 
    onChange={(e)=>setLength(parseInt(e.target.value))}/> 
        </div> 
     <div className="checkbox-group">
    <input type='checkbox' id='upper' checked={lower} onChange={(e)=>setLower(e.target.checked)}/>
     <label htmlFor="upper">Include lowercase</label>   
        </div>  
        <div className="checkbox-group">
    <input type='checkbox' id='lower' checked={upper} onChange={(e)=>setUpper(e.target.checked)}/>
     <label htmlFor="lower">Include uppercase</label>   
        </div>
       < div className="checkbox-group">
    <input type='checkbox' id='numbers'checked={number}onChange={(e)=>setNumber(e.target.checked)}/>
     <label htmlFor="numbers">Include Numbers</label>   
        </div> 
        <div className="checkbox-group">
    <input type='checkbox' id='symbols' checked={symbol} onChange={(e)=>setSymbol(e.target.checked)}/>
     <label htmlFor="symbols">Include symbols</label>   
        </div> 
        <button className="generate-button" onClick={generatepassword}>
            Generate Password</button> 
    <div className="generate-password">
    
      <input className="text" readOnly value={password}/>
      <button className="copy"  onClick={copy}>Copy</button>
        </div>        
    </div>
)
}