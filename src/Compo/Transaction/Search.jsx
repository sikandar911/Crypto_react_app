import React, { useState } from 'react'
import styled from 'styled-components'
import { Trans_data } from './Trans_data'

const Search = () => {
  
   
  
    const[searchq, setSearchq] =useState(" ");
  
  const handleSearch= (event) => {
   setSearchq(event.target.value);
  };

  const [Trans, setTrans] = useState(Trans_data);
  const filerTrans= Trans.filter(
    (trans)=>trans.type === searchq
  );
    return (
    <div>
    <input type="text" 
        placeholder='Search By ID'
        value={searchq}
        onChange={handleSearch}
    />
         <Main>
        <div className='row'>
        <div className='datah'>ID</div>
        <div className='datah'>Date & Time</div>
        <div className='datah'>Type</div>
        <div className='datah'>Amount</div>
        <div className='datah'>Status</div>
        </div>
     
          {filerTrans.map((trans)=>(
        <><div className='row_data' key={trans.id}>
        <div className='data'>{trans.id}</div>
        <div className="data">{trans.time}</div>
        <div className="data">{trans.type}</div>
        <div className="data">{trans.amount}</div>
        <div className="data">{trans.Status}</div>
        </div> </>
      ))};
    </Main>
    </div>
  )
}

export default Search
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
