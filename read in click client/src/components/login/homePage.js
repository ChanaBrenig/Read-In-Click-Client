import React from 'react'
import Button from '@material-ui/core/Button';
import './homePage.css'
import { useHistory } from "react-router-dom";

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
      <br /><br /><br /><br />
      <h1 className='title'> Read-In-Click </h1>

      <div className='wrrapbt'>
        <Button variant="contained" color="secondary" onClick={goToNewtUser}>למשתמש חדש</Button>
       <br></br> <br></br> 
        <Button variant="contained" color="secondary" onClick={goToOldUser}>למשתמש קיים</Button>
      </div>

      <br /><br /><br /><br /><br />
    </div>
  )
}
export default HomePage;