import React from 'react'
import OffCanvas from '../Compo/OffCanvas'
import styled from 'styled-components'
import { IoPersonSharp } from "react-icons/io5";
import Trans_View_table from '../Compo/Trans_View_table';
import Contact from '../Compo/Contact';
import SupportBot from '../Compo/SupportBot';

const Support = () => {
  return (
    <Main>
      <div className='sidemenu'>
        <OffCanvas></OffCanvas>
    </div>
    <div className='mainDash'>
    <Header>
    <div className='headings'> 
    <h2> Support </h2>
    </div>
    <div className='icons'>
    <IoPersonSharp  fontSize="20px"/>
    </div>
    </Header>
    <Contact />
    <SupportBot />
    </div>
    </Main>
  )
}

export default Support
const Main = styled.div`
display: flex;
min-height: calc(100vh - 3px);
width: 100%;
margin: 0;


.sidemenu{
    flex-basis: 20%;
    background: whitesmoke;
}
.mainDash{
    flex-basis: 80%;
    background: white;
}

`


const Header = styled.div `
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: whitesmoke;
   padding: 0 50px;
   height: 50px;
   h2{
     font-size: 20px;
   }
  .headings{
    height: 50px;  
   }
   .icons{
    border-radius: 65px;
    background-color: white;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
   }
   p{
  font-size: 12px;
}

`