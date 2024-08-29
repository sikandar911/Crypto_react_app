import React from 'react'
import styled from 'styled-components'
import { IoChatbubble } from "react-icons/io5";

const SupportBot = () => {
  return (
    <Main>
    <div className="left">
    <IoChatbubble className='icon' />
    <h1>Live Chat</h1>
    <p>Don’t have time to wait for the answer? Chat with us now.</p>
    </div>
    <div className="right">
    <div className="icontext1"><p >Live Chat</p></div>
    <h3> Chat With us Now</h3>
    </div>
    </Main>
  )
}

export default SupportBot
const Main = styled.div`
display: flex;
width: 100%;
margin: 0 auto;
gap: 10px;
padding: 20px;
.icon{
    color: var(--theme-color);
    margin: 0;
}
p{
    font-size: 12px;
}
.left{
    border-radius: 15px;
    flex-basis: 40%;
    padding: 10px;
    background-color: aliceblue;
}
.right{
    flex-basis: 50%;
    border-radius: 15px;
    color: white;
    padding: 10px;
    flex-basis: 50%;
    background: linear-gradient(45deg,  rgba(95, 0, 217, 1),  rgba(95, 0, 217, 0.7)), url('images/Visual.png');
    background-size: cover;
    border-radius: 10px;

    color:white;
}
.icontext1{
 background-color: white;
 width: max-content;
 font-size: 14px;
 color: var(--theme-color);
 padding: 5px 5px;
 border-radius: 10px;
 p{
    margin: 0px;
 }
}

`