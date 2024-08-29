/* eslint-disable react/prop-types */
import styled from 'styled-components'
import {Trans_data} from './Trans_data'
import { useState } from 'react'

const All_trans = () => {  
  const [Trans, SetTrans] = useState(Trans_data);
  return (
      
    <Main>
        <div className='row'>
        <div className='datah'>ID</div>
        <div className='datah'>Date&Time</div>
        <div className='datah'>Type</div>
        <div className='datah'>Amount</div>
        <div className='datah'>Status</div>
        </div>
     
          {Trans.map((item)=>(
        <><div className='row_data' key={item.id}>
        <div className='data'><p>{item.id}</p></div>
        <div className="data">{item.time}</div>
        <div className="data">{item.type}</div>
        <div className="data">{item.amount}</div>
        <div className="data">{item.Status}</div>
        </div> </>
      ))};
    </Main>
  )
}

export default All_trans
const Main = styled.div`
display: flex;
flex-direction: column;
padding:10px 20px;
.row{
  display: grid ;
  grid-template-rows: 1fr;
  grid-template-columns: 1.2fr 1.2fr 1.2fr 1.2fr 1.2fr;
  width: 100%;
  height: 40px;
  align-items: center;
  border-top: solid 0.2px rgba(216, 221, 226, 1);
  border-bottom: solid 0.2px rgba(216, 221, 226, 1);
  font-size: 14px;
  @media (min-width: 468px) {
    font-size: 10px;
  } 
  @media (min-width: 768px) {
    font-size: 12px;
  } 
  @media (min-width: 1024px) {
    font-size: 14px;
  }
}
.row_data{
  display: grid ;
  grid-template-rows: 1fr;
  grid-template-columns: 1.2fr 1.2fr 1.2fr 1.2fr 1.2fr;
  width: 100%;
  height: 40px;
  font-size: 14px;
  align-items: center;
  border-top: solid 0.2px rgba(216, 221, 226, 1);
  border-bottom: solid 0.2px rgba(216, 221, 226, 1);
  @media (min-width: 468px) {
    font-size: 10px;
  } 
  @media (min-width: 768px) {
    font-size: 12px;
  } 
  @media (min-width: 1024px) {
    font-size: 14px;
  }
}
`
