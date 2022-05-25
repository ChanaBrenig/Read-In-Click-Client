import React, { useState, useEffect } from 'react'
import { signUpApi } from './loginApi'
import { useHistory } from 'react-router-dom'
import './signUp.css'
import './homePage.css'
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';


function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState(0)
    const history = useHistory();

    const api = () => {
     if(userId.length==9&&password.length>=6){
        signUpApi({ user })
        .then(() => {
            alert("המשתמש נוסף בהצלחה");
            history.push('/choose')
        })
        .catch(() => {
            console.log('--error--');
        })
     }
        else{
            if(userId.length!=9 ){
                alert("תעודת זהות חייבת להכיל 9 ספרות")
                setUserId('')
              }
                if(password.length<6){
                alert("סיסמא חייבת להכיל לפחות 6 תווים") 
                setPassword('')
              }
            }   
    }
    let user = { firstName, lastName, userId, password, status }

    return (
        <div className="generalDivSignUp">
            <br /><br /><br />
            <div  className="t1" >רישום משתמש חדש וכניסה למערכת</div>
            <br />
            <div className="lableLogin"> שם פרטי</div>
            <TextField color="secondary" onChange={(e) => { setFirstName(e.target.value) }} focused />
            <br /> <br />
            <div className="lableLogin"> שם משפחה</div>
            <TextField color="secondary" onChange={(e) => { setLastName(e.target.value) }} focused />
            <br /> <br />
            <div className="lableLogin"> תעודת זהות</div>
            <TextField color="secondary" onChange={(e) => { setUserId(e.target.value) }} focused />
            <br /><br />
            <div className="lableLogin"> סיסמא</div>
            <TextField color="secondary" onChange={(e) => { setPassword(e.target.value); setStatus(0) }} focused />
            <br /><br /><br />
            <Button variant="contained" color="secondary" onClick={api}> לשמירת הנתונים</Button>
            <br /><br /><br /><br /><br />
        </div>)
}

export default SignUp;