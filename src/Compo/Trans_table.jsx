import React, { useState } from 'react'
import styled from 'styled-components'
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { FaBitcoin } from "react-icons/fa6";
const Trans_table = () => {
    const [data,setData]=useState([
        {
            icon: <RiMoneyEuroCircleFill />,
            text: "BDT Deposit",
            amount: "$ 21,345.00",
            time: "2024-06-14 ",
    
        },
        {
          icon: <FaBitcoin />,
          text: "BTC Exchange",
          amount: "$ 21,345.00",
          time: "2024-07-24",
        },
        {
          icon: <RiMoneyEuroCircleFill />,
          text: "BDT deposit",
          amount: "$ 41,345.00",
          time: "2024-08-11",
    
        },
      ]);
 
    return (

    <Stat_table>
    <div className='head'><p>Recent Transaction</p></div>
    {data.map((item)=>( 
    <><div className='table_row'>
            <div className='icon'>{item.icon}</div>
            <div><h2 style={{ margin: '0px' }}>{item.text}</h2><p style={{ margin: '0px', color: 'var(--text-color)' }}>{item.time}</p></div>
            <div><h2 style={{ margin: '0px' }}>{item.amount}</h2></div>
        </div></>
))}
    <div className='v_all'>
      <button>View All</button>
    </div>
    </Stat_table>
  )
}

export default Trans_table

const Stat_table = styled.div`
 flex-basis: 50%;
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    border-radius: 10px;
  @media (min-width: 475px) {
    h2{
font-size: 14px;
   }
  }  
  @media (min-width: 968px) {
    h2{
font-size: 18px;
   }
  } 
  
  .table_row{
  display: flex;
  justify-content: space-between;
  width: 90%;
  min-height: fit-content;
  padding: 10px;
}


.table_row .icon{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 30px;
  width: 30px;
  border-radius: 30px;
  margin-left: 5px;
  font-size: 22px;
}
.head{
   margin-left: 30px;
   p{
    font-size: 15px;
    
   }
}
.v_all{
  display: flex;
  width: 100%;
  margin-left: 10px;
  padding: 10px;
  & button{
    width: 90%;
    border: none;
    background-color: var(--theme-color);
    color: white;
    transition: 0.4s background ease-in;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    &:hover{
    background-color: var(--theme-color-hover);
    color:  white;
    transition: 0.4ms background ease-out;
    font-weight: 500;
 }
 @media (min-width: 968px) {
  width: 90%;
  padding: 10px;
 }
  }
}
`