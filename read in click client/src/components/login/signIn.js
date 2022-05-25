import React from 'react'
import { useEffect, useState } from "react";
import { signInApi } from "./loginApi";
import { useHistory } from 'react-router-dom'
import './homePage.css'
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';

import { textAlign } from '@mui/system';
function SignIn() {
  

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [b, setButton] = useState(true)

const onClick=()=>{
  fetch(url)
      .then(res => res.json())
      .then(data => {if(data.length>0){
        history.push('/choose')
      }
    else{
      alert("תעודת זהות או סיסמא שגויים")
    }})
      .catch(err => console.log(err))    
}
  const history = useHistory();

const url = `http://localhost:3001/signInById/${id}/${password}`;
  

  useEffect(() => {
  if(id.length==9&&password.length>=6){
    setButton(false)  
  }
  }, [id,password]);
  
  //let user = { id }
  return (
    <div className="generalDivSignUp">
      <br /> <br /><br /><br /><br /><br />
      <div  className="t1" >כניסה באמצעות תעודת זהות וסיסמא</div>
      <br/>
      <div className="lableLogin"> תעודת זהות</div>
      <br />
      <TextField color="secondary" onChange={(e) => { setId(e.target.value) }} focused />
      <br /> <br />
      <div className="lableLogin"> סיסמא</div>
      <br />
      <TextField color="secondary" onChange={(e) => { setPassword(e.target.value) }} focused />
      <br /> <br />
   
     
      <Button variant="contained" color="secondary" disabled={b} onClick={() => { onClick() }}> לאישור  </Button>
      <br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>)
}
export default SignIn;