import React from 'react'
import styled from  'styled-components'
import { MdDashboard } from "react-icons/md";
import { TbTransactionDollar } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb"; 
import { Link } from 'react-router-dom';

const OffCanvas = () => {
   
  return (
    <OffCanvasmenu>
     <div className='headings'>
     <h1> TigerBet </h1>
     <div className='first'>
    <button> <Link className='blink' to="/">
       <MdDashboard className='icon'  fontSize="18"/>  Dashboard 
     </Link>
     </button> 
     </div>  
     <div>
     <button>
     <Link className='blink' to="/transaction">
      <TbTransactionDollar className='icon'  fontSize='18'/>  Transictions 
     </Link>
     </button>
     </div>    
     <div>
     <button>
     <Link className='blink' to="/support">
      <TbCurrencyDollar className='icon'  fontSize='18'/>  About Us 
     </Link>
     </button>
     </div>     
     </div>
     <div className='support'>
     <div>
     <button>
     <Link className='blink' to='/support'>
      <MdOutlineSupportAgent className='icon' fontSize='18'/>  Support
     </Link>
     </button>
     </div>   
     </div>
    </OffCanvasmenu>
  )
}

export default OffCanvas

const OffCanvasmenu = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 
 height: calc(100vh - 3px);
 h1{
    text-align: center;
 }
 .headings{
    display: flex;
    flex-direction: column;
    gap: 8px; 
 }
 
 button{
    color: black;
 padding: 10px 18px;
 width: 100%;
 background-color: whitesmoke;
 border-radius: 5px;
 border: none;
 transition: 0.4s background ease-in;
 cursor: pointer;
 font-size: 16px;
 text-align: left;
 text-decoration: none;
 

 &:hover{
    background-color: rgb(235, 235, 235);
    color:  black;
    transition: 0.4ms background ease-out;
    font-weight: 500;
 }
 }
 .blink{
   text-decoration: none;
 }
.icon{
    margin-bottom: -4.5px;
    padding-right: 5px;
}
.first{
   padding-top: 10px;
}
`




