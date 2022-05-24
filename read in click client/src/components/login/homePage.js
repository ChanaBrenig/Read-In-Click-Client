import React from 'react'
import Button from '@material-ui/core/Button';
import './homePage.css'
import { useHistory } from "react-router-dom";
import welcome from '../completeWords/images/welcome.gif'
import welcome2 from '../completeWords/images/welcome2.gif'
import welcome3 from '../completeWords/images/welcome3.gif'
import welcome4 from '../completeWords/images/welcome4.gif'
import welcome5 from '../completeWords/images/welcome5.gif'

const HomePage = () => {
  let history = useHistory();

  function goToOldUser() {
    history.push("/signIn");
  }
  function goToNewtUser() {
    history.push("/signUp");
  }
  function goToChoose() {
    history.push("/choose");

  }

  return (
    <div className="generakDivHomePage">
      <br /><br />
      <h1 className='title'> Read-In-Click </h1>
      <h1 className='subTitle'> אתר ללימוד קריאה </h1>
      <br /><br />
{/* <img src={welcome5}></img> */}
      <div className='wrrapbt'>
        <Button variant="contained" color="secondary" onClick={goToNewtUser}>למשתמש חדש</Button>
       <br></br> <br></br> 
        <Button variant="contained" color="secondary" onClick={goToOldUser}>למשתמש קיים</Button>
      </div>

      <br /><br /><br /><br />
    </div>
  )
}
export default HomePage;