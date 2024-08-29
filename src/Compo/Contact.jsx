import React from 'react'
import styled from 'styled-components'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <Main>
    <div className="info">
    <h1>Contact Us</h1>
    <p>Have a Question? please feel free to Contact with us. Leave a message on the form Or Send a email</p>
     <p> <MdEmail  className='icon'fontSize={'20px'}/> info@Tigerbet.com </p>
    <p><FaPhone   className='icon' fontSize={'20px'}/> +21433606911 </p>
    
    </div>
    <div className="conform">
    <form action="">
       <div className="form">
       <p>You will receive response within 24 hours of time of submit.</p>
       <div className='name-row'> 
        <div className="name">
       <label htmlFor="fname">First Name</label>
       <input type="text" id='fname' placeholder='Jhon'/> 
       </div>
       
       <div className="name">
       <label htmlFor="lname">Last Name</label>
       <input type="text" id='lname' placeholder='Doe'/> 
       </div>
       </div>
       <div className='row'>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
       </div>
       <div className="row">
        <label htmlFor="message">Message</label>
        <textarea name="message" rows='4' id="message"></textarea>
       </div>
       <div >
       <input type="checkbox" />
       <label>I Agree with the <span className='highlight'> Term & Conditions </span></label>
        </div>
       <div className="row">
        <button type='submit'>Submit</button>
       </div>
       </div>
    </form>
    </div>

    </Main>
  )
}

export default Contact

const Main= styled.div`
display: flex;
width: 100%;
margin: 0;
gap: 10px;

.info{
    padding-left: 40px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    flex-basis: 40%;
    h1{
        margin: 0%;
        padding-top: 10px;
    }
    .icon{
        margin-bottom:-5px ;
        margin-right: 10px;
        color: var(--theme-color);
        :hover{
            scale: 1.1;
        }
    }
}

.conform{
    flex-basis: 60%;
    width: 90%;
}

.form{
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    gap: 10px;
    background-color: aliceblue;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    p{
        margin-top: 0;
        color: var(--theme-color);
    }
    input{
        border: solid  rgba(238, 238, 244, 1) 1px;
        border-radius:5px ;
        padding: 10px;
    }
    textarea{
        border: solid  rgba(238, 238, 244, 1) 1px;
        border-radius:5px ;
    }
    .highlight{
        color: var(--theme-color);
    }
    button{
    width: 100%;
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
  width: 100%;
  padding: 10px;
 }
  }
}

.name-row{
    display: flex;
    gap: 10px;
}
.name{
    display: flex;
    flex-direction: column;
}

.row{
    flex-direction: column;
    display: flex;
    
}

`