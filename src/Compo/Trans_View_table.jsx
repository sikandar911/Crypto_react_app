import React from 'react'
import styled from 'styled-components'
import All_trans from './Transaction/All_trans'
import Deposit from './Transaction/Deposit'
import Withdraw from './Transaction/Withdraw'
import Trade from './Transaction/Trade'
import Search from './Transaction/Search'
const Trans_View_table = () => {


  return (
   <Container>
    <div className="warpper">
  <input className="radio"  id="one" name="group" type="radio" />
  <input className="radio" id="two" name="group" type="radio" />
  <input className="radio" id="three" name="group" type="radio" />
  <input className="radio" id="four" name="group" type="radio" />
  <input className="radio" id="five" name="group" type="radio" />
  <div className="tabs">
  <label className="tab" id="one-tab" htmlFor="one">All</label>
  <label className="tab" id="two-tab" htmlFor="two">Deposit</label>
  <label className="tab" id="three-tab" htmlFor="three">Withdraw</label>
  <label className="tab" id="four-tab" htmlFor="four">Trade</label>
  <label className="tab" id="five-tab" htmlFor="five">Search</label>
    </div>
  <div className="panels">
  <div className="panel" id="one-panel">
    <div className="panel-title"></div>
    <All_trans />
  </div>
  <div className="panel" id="two-panel">
    <div className="panel-title"></div>
    <Deposit />
  </div>
  <div className="panel" id="three-panel">
    <div className="panel-title"></div>
   <Withdraw />
  </div>
  <div className="panel" id="four-panel">
    <div className="panel-title"></div>
   <Trade />
  </div>
  <div className="panel" id="five-panel">
    <div className="panel-title"></div>
    <Search />
  </div>
  
  </div>
   </div>
   </Container>
  )
}

export default Trans_View_table
const Container = styled.div`
@import url('https://fonts.googleapis.com/css?family=Arimo:400,700&display=swap');

  font-family: 'Arimo', sans-serif;
display: flex;
justify-content: center;

h2{
  color:#000;
  text-align:center;
  font-size:2em;
}
.warpper{
  display:flex;
  flex-direction: column;
  align-items: start;
  padding-top: 20px;
}
.tab{

  padding:10px 20px;
  margin:0px 2px;
  background: rgba(95, 0, 217, 1);
  display:inline-block;
  color:#fff;
  border-radius:3px 3px 0px 0px;
  box-shadow: 0 0.5rem 0.8rem #00000080;
}
.panels{
  background:#fffffff6;
  box-shadow: 0 2rem 2rem #00000080;
  min-height:200px;
  width:100%;
  border-radius:3px;
  overflow:hidden;
   
  @media (min-width: 468px) {
    width: 350px;
    font-size: 10px;
  } 
  @media (min-width: 768px) {
    width: 550px;
    font-size: 12px;
  } 
  @media (min-width: 1024px) {
    width: 800px;
    font-size: 14px;
  } 
}
.panel{
  display:none;
  animation: fadein .8s;
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
.panel-title{
  font-size:1.5em;
  font-weight:bold;
}
.radio{
  display:none;
}
#one:checked ~ .panels #one-panel,
#two:checked ~ .panels #two-panel,
#three:checked ~ .panels #three-panel,
#four:checked ~ .panels #four-panel,
#five:checked ~ .panels #five-panel
{
  display:block
}
#one:checked ~ .tabs #one-tab,
#two:checked ~ .tabs #two-tab,
#three:checked ~ .tabs #three-tab,
#four:checked ~ .tabs #four-tab,
#five:checked ~ .tabs #five-tab{
  background:#fffffff6;
  color:#000;
  border-top: 3px solid rgba(95, 0, 217, 1);
}

`