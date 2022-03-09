import React, { useState, useEffect } from 'react'
//import { signUpApi } from './loginApi'
import { signUpApi } from './loginApi'
import { useHistory } from 'react-router-dom'
// import { TextField } from '@material-ui/core';
import './signUp.css'
import './homePage.css'
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';




function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userId, setUserId] = useState('')
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
            
                <br />
                <br />
                <br />
                    
                <br />
                <br />
                
        
                <div className="wrrapbt" className="lableLogin">הכנס שם פרטי</div>
                <TextField  color="secondary" onChange={(e) => { setFirstName(e.target.value) }} focused />
                {/* <input className="wrrapbt" onChange={(e) => { setFirstName(e.target.value) }} /> */}
                <br />
                <br />

                <div className="wrrapbt" className="lableLogin">הכנס שם משפחה</div>

                <TextField  color="secondary" onChange={(e) => { setLastName(e.target.value) }} focused />

                {/* <input className="wrrapbt" onChange={(e) => { setLastName(e.target.value) }}></input> */}
                <br />
                <br />

                <div className="wrrapbt" className="lableLogin">הכנס מספר זהות</div>
                
                <TextField  color="secondary" onChange={(e) => { setUserId(e.target.value) }} focused />

                {/* <input className="wrrapbt" onChange={(e) => { setUserId(e.target.value) }}></input> */}
                {/* <div>הכנס סטטוס</div>
        
        <input onChange={(e) => { setStatus(e.target.value) }}></input> */}
                <br />
                <br />
                <br />
                <Button variant="contained" color="secondary" onClick={api}> לשמירת הנתונים</Button>

                {/* <button className="wrrapbt" onClick={api}>לשמירת הנתונים</button> */}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              
            
        </div>)
}

export default SignUp;