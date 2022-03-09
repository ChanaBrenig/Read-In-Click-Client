import React from 'react'
import './checkValue.css'
import Alert from '@mui/material/Alert';
//import Stack from '@mui/material/Stack';

const check = () => {
    alert("אתה בטוח שמה שכתבת זה נכון?")
    //   <Alert variant="filled" severity="warning">
    //   This is a warning alert — check it out!
    // </Alert>
}

export default function CheckValue() {
    return (
        <div>

            <button className="btnCheck" onClick={check}>בדוק</button>
        </div>)
}