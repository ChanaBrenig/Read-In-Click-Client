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
    const [status, setStatus] = useState('')
    const history = useHistory();

   const api = () => {
        signUpApi({ user })
            .then(() => {
                history.push('/choose')
            })
            .catch(() => {
                console.log('--error--');
            })
    }
    let user = { firstName, lastName, userId }

    return (
        <div className="generalDivSignUp">
            <br /><br /><br />
            <div className="lableLogin"> שם פרטי</div>
            <TextField color="secondary" onChange={(e) => { setFirstName(e.target.value) }} focused />
            <br /> <br />
            <div className="lableLogin"> שם משפחה</div>
            <TextField color="secondary" onChange={(e) => { setLastName(e.target.value) }} focused />
            <br /> <br />
            <div className="lableLogin"> מספר זהות</div>
            <TextField color="secondary" onChange={(e) => { setUserId(e.target.value) }} focused />
            <br /><br />
            <div className="lableLogin"> סיסמא</div>
            <TextField color="secondary" onChange={(e) => { setPassword(e.target.value) }} focused />
            <br /><br /><br />
            <Button variant="contained" color="secondary" onClick={api}> לשמירת הנתונים</Button>
            <br /><br /><br /><br /><br />
        </div>)
}

export default SignUp;