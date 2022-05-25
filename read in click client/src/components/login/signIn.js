import React from 'react'
import { useEffect, useState } from "react";
import { signInApi } from "./loginApi";
import { useHistory } from 'react-router-dom'
import './homePage.css'
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';


function SignIn() {

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  function api() {

    signInApi(user) .then(() => {
        debugger

        history.push('/choose')
      }) .catch(() => {
        console.log('--error--');
      })
  }
  
  let user = { id }
  return (
    <div className="generalDivSignUp">
      <br /> <br /><br /><br /><br /><br />
      <div className="lableLogin"> מספר זהות</div>
      <br />
      <TextField color="secondary" onChange={(e) => { setId(e.target.value) }} focused />
      <br /> <br />
      <div className="lableLogin"> סיסמא</div>
      <br />
      <TextField color="secondary" onChange={(e) => { setPassword(e.target.value) }} focused />
      <br /> <br />
      <Button variant="contained" color="secondary" onClick={() => { api() }}> לאישור  </Button>
      <br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>)
}
export default SignIn;