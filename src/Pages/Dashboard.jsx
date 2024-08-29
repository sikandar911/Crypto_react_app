import React, { useState } from 'react'
import OffCanvas from '../Compo/OffCanvas'
import styled from 'styled-components'
import DashHeader from '../Compo/DashHeader'
import Midbox from '../Compo/Midbox'
import Bot_mesbox from '../Compo/Bot_mesbox'


const Dashboard = () => {

  return (
    <Main>

    <div className='sidemenu'>
        <OffCanvas></OffCanvas>
    </div>
    <div className='mainDash'>
     <DashHeader headline="Dashboard"> </DashHeader>
    <Midbox> </Midbox>
    <Bot_mesbox> </Bot_mesbox>
    
    </div>
    </Main>
  )
}

export default Dashboard

const Main= styled.div `
display: flex;
min-height: calc(100vh - 3px);
width: 100%;
margin: 0;


.sidemenu{
    flex-basis: 15%;
    background: whitesmoke;
}
.mainDash{
    flex-basis: 85%;
    background: white;
}


`