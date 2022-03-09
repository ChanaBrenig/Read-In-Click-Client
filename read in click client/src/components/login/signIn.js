import React from 'react'
import { useEffect, useState } from "react";
import { signInApi } from "./loginApi";
import { useHistory } from 'react-router-dom'
import './homePage.css'
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';


function SignIn() {

  const [id, setId] = useState('')
  const history = useHistory();

  // useEffect(() => {
  //   signInApi(user)
  //     .then(() => {
  //       history.push('/signIn')
  //     })
  //     .catch(() => {
  //       console.log('--error--');
  //     })
  // }, []);
  function api() {
    
    signInApi(user)
    
      .then(() => {
        debugger
        history.push('/choose')
      })
      .catch(() => {
        console.log('--error--');
      })
  }


  let user = { id }
  return (
    <div className="generakDivHomePage">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/> <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className="wrrapbt" className="lableLogin">הכנס מספר זהות</div>
      <br/>
      {/* <input className="wrrapbt" onChange={(e) => { setId(e.target.value) }}></input> */}
      <TextField  color="secondary" onChange={(e) => { setId(e.target.value) }} focused />
      

    <br/>
    <br/>
    {/* <Button   className="wrrapbt" className="btnLogin" onClick={api}>
    לאישור לחץ כאן</Button> */}
    <Button variant="contained" color="secondary" onClick={()=>{api()}}> לאישור לחץ כאן</Button>
      {/* <button className="wrrapbt" onClick={api}>לאישור לחץ כאן</button> */}
      <br/>
    
    <br/> <br/>
    <br/>
    <br/>
    <br/> <br/>
    <br/>
    <br/>
    <br/>
    <br/> <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>)
}
export default SignIn;