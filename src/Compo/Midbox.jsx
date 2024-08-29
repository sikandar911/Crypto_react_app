
import styled from 'styled-components'
import { FiArrowUpRight } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import Trans_table from './Trans_table';
import '../App.css'

const Midbox = () => {
 
  
  return (
    <Main>
    <div className='stat'>
    
     <div className='top'>
     <div>
     <p>Current Price</p>
     <h2 style={{display:'inline'}}>$26,670.025</h2>
     <FiArrowUpRight style={{display:'inline', margin:'2px', color:"green"}} />
     <p style={{display:'inline',margin:'2px',color:"green" }} >0.04%</p>
     </div>
     <div style={{display:'flex', gap:'5px'}}>
        <button><FaPlusCircle className='but_icon' />Buy</button>
        <button><FaMinusCircle className='but_icon' />Sell</button>
     </div>
     </div>
     <div className='time_select'>
      <button>1H</button>
      <button>1D</button>
      <button>1W</button>
      <button>1M</button>
     </div>
     <div style={{display:'flex', justifyContent:"center"}}>
      <img src="/images/Vector 26.png" alt="stat" />
     </div>
     <div className='time'>
      <div><p>7:15 PM</p></div>
      <div><p>12:55 PM</p></div>
      <div><p>6:35 AM</p></div>
      <div><p>12:15 PM</p></div>
      <div><p>5:55 PM</p></div>
     </div>
    </div>

    <Trans_table> </Trans_table>
    {/* <div className='stat_table'>
    <div className='head'><p>Recent Transaction</p></div>
    
    <div className='table_row'>
     <div className='icon'><RiMoneyEuroCircleFill style={{fontSize:'24px'}} /></div>
     <div><h2 style={{margin:'0px'}}>BDT Deposit</h2><p style={{margin:'0px', color:'var(--text-color)'}}>2024-08-10 7:06PM</p></div>
     <div><h2 style={{margin:'0px'}} >+ ৳8,214.00</h2></div>
    </div>
    <div className='table_row'>
     <div className='icon'><FaBitcoin style={{fontSize:'22px'}} /> </div>
     <div><h2 style={{margin:'0px'}}>BTC Sell</h2><p style={{margin:'0px', color:'var(--text-color)'}}>2024-08-12 10:25PM</p></div>
     <div><h2 style={{margin:'0px'}} >- 8.125 BTC</h2></div>
    </div>
    <div className='table_row'>
     <div className='icon'><RiMoneyEuroCircleFill style={{fontSize:'24px'}}/></div>
     <div><h2 style={{margin:'0px'}}>BDT Deposit</h2><p style={{margin:'0px', color:'var(--text-color)'}}>2024-08-14 7:41PM</p></div>
     <div><h2 style={{margin:'0px'}} >+ ৳8,214.00</h2></div>
    </div>
    <div className='v_all'>
      <button>View All</button>
    </div>
    </div> */}
    </Main>
  )
}

export default Midbox

const Main = styled.div`
display: flex;
width: 100%;
margin: 0 auto;
gap: 10px;
padding-top: 15px;

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
.stat{
    flex-basis: 50%;
    background-color: aliceblue;
    border-radius: 10px;
}
.stat .top{
 
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
.stat .top button{
    color: white;
  height: 2.2rem;
 padding: 0px 20px;
 width: fit-content;
 background-color: var(--theme-color);
 border-radius: 8px;
 border: none;
 transition: 0.4s background ease-in;
 cursor: pointer; 
 text-align: left;

 &:hover{
    background-color: var(--theme-color-hover);
    color:  white;
    transition: 0.4ms background ease-out;
    font-weight: 500;
 }

}
.stat .top .but_icon{
  margin-bottom: -1.5px;
    padding-right: 2px;
}
img{
  width: 90%; }
  .time{
    display: flex;
    justify-content: space-between;
    padding: 2px 5px;
    p{
    font-size: 10px;
   }
  }
  .time_select{
  display: flex;
  justify-content: end;
  
}
.stat_table{
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
  .time_select button{
    font-size: 10px;
    border: none;
    padding: 8px 10px;
    background-color: whitesmoke;
    cursor: pointer;
    border-radius: 2px;
    &:hover{
      background-color: white;
    }
  }

    `