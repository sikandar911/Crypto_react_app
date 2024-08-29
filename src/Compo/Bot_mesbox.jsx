
import styled from 'styled-components'
const Bot_mesbox = () => {
  return (
    <>
    <Last>
    <div className='left'>
     <div className="icontext1"><p >Loans</p></div>
     <p>Learn more about Loans- Koop your Bitcoin, Acces it's Value without selling it.</p>
    </div>
    <div className='right'>
    <div className="icontext2"><p>Contact</p></div>
     <p>Learn more about Loans- Koop your Bitcoin, Acces it's Value without selling it.</p>
    </div>      
    </Last>
    </>
  )
}

export default Bot_mesbox

// eslint-disable-next-line react-refresh/only-export-components
const Last = styled.div`
display: flex;
width: 100%;
margin: 0 auto;
gap: 10px;
padding-top: 15px;
@media (min-width: 475px) {
  width: 95%;
  margin: 10px auto;
  p{
    font-size: 14px;
  }
}
@media (min-width: 968px) {
  width: 80%;
  margin: 10px auto; 
}
.left{
    flex-basis: 50%;
    background-image: url('images/Visual1.png');
    background-size: cover;
    background-color: aliceblue;
    padding: 10px 15px;
    border-radius: 10px;
}
.right{
    flex-basis: 50%;
    background: linear-gradient(45deg,  rgba(95, 0, 217, 1),  rgba(95, 0, 217, 0.7)), url('images/Visual.png');
    background-size: cover;
    border-radius: 10px;
    padding: 10px 15px;
    color:white;
}
.icontext1{
 background-color: rgba(95, 0, 217, 1);
 width: max-content;
 font-size: 14px;
 color: white;
 padding: 5px 5px;
 border-radius: 10px;
 p{
    margin: 0px;
 }
}

.icontext2{
    background-color: white;
 width: max-content;
 font-size: 14px;
 color:  rgba(95, 0, 217, 1);
 padding: 5px 5px;
 border-radius: 10px;
 p{
    margin: 0px;
 }
}

`