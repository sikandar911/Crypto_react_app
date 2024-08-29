import React, { useState } from 'react'
import styled from 'styled-components'
import { IoPersonSharp } from "react-icons/io5";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

const DashHeader = ({headline}) => {

  return (
    <div>
    <Main>
    <div className='headings'> 
    <h2> {headline} </h2>

    </div>
    <div className='icons'>
    <IoPersonSharp fontSize="20px"/>
    </div>
    </Main>
    <MainDash>
    <div className='info'>
    <p>Total Portfolio Value !</p>
    <h2>$112,312.24</h2> 
    </div>
    <div className='info'>
    <p>Wallet Balances</p>
    <h2>$22.394031 </h2> <p className='tag'>BTC</p>
    </div>
    <div className='local'>
    <h2>৳1,300.00 </h2>  <p className='tag'>BDT</p>
    </div>
    <div className='buttons'>
     <button><FaArrowAltCircleUp className='but-icon' fontSize="16"/>Deposit</button>
     <button><FaArrowAltCircleDown className='but-icon' fontSize={16}/>Withdraw</button>
    </div>
    </MainDash>
    </div>
  )
}

const MainDash = styled.div`
display: grid; 
width: 70%;
background-color:aliceblue;
padding: 10px;
grid-template-rows: 1fr;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-row-start: 2;
border-radius: 10px;
gap: 2px;
text-align: left;
margin: 0 auto;
@media (min-width: 475px) {
  width: 95%;
  margin: 10px auto;
}
@media (min-width: 968px) {
  width: 80%;
  margin: 10px auto;
}

p{
  font-size: 12px;
}


h2{
  display: inline;
}
.local{
 margin-top: 35px;
}
 .tag{
  font-size: 11px;
background-color: aliceblue;
width: fit-content;
padding: 5px;
border-radius: 2px; 
display: inline;
 }
 .info{
  justify-items: left;
  align-items: end;
 }
.but-icon{
  margin-bottom: -4.5px;
    padding-right: 5px;
    display: inline;
}
 .buttons{
  margin-top: 20px;
  display: flex;
  justify-self: end;
  gap: 4px;
  justify-items: end;
  margin-top: -5px;

 }
 button{
  color: white;
  height: 3rem;
 padding: 5px 15px;
 width: fit-content;
 background-color: var(--theme-color);
 border-radius: 8px;
 border: none;
 transition: 0.4s background ease-in;
 cursor: pointer;
 text-align: left;
 width: max-content;
 @media (min-width: 768px) {
  padding: 5px 8px;
}


 &:hover{
    background-color: var(--theme-color-hover);
    color:  white;
    transition: 0.4ms background ease-out;
    font-weight: 500;
 }
 }

`


export default DashHeader
const Main = styled.div `
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: whitesmoke;
   padding: 0 50px;
   height: 60px;
   h2{
     font-size: 20px;
   }
  .headings{
    min-height: 50px;  
   }
   .icons{
    border-radius: 65px;
    background-color: white;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
   }
   p{
  font-size: 12px;
}

`

