import React from 'react'
import './status.css'
import welcome from '../completeWords/images/welcome.gif'
import welcome2 from '../completeWords/images/welcome2.gif'
import welcome3 from '../completeWords/images/welcome3.gif'
import welcome4 from '../completeWords/images/welcome4.gif'
import welcome5 from '../completeWords/images/welcome5.gif'
import { useHistory } from "react-router-dom";

const Status = () => {
    let history = useHistory();

    const setStatus = () => {
        history.push('/setStatus')
    }
    const getStatus = () => {
        history.push('/getStatus')
    }

    return (
        <div >

            <h2 className="titleStatus">ברוכים הבאים לסטטוס המשתמש</h2>
            <h2 className="titleStatus">כאן תוכלו לצפות ולערוך את רמת הידע שלכם בקריאה</h2>
            <img src={welcome} className="phoo"></img>
            <button onClick={setStatus} className="btnStatus">לעריכת הסטטוס</button>
            {/* <button onClick={getStatus} className="btnStatus">לצפיה בסטטוס</button> */}


        </div>)
}
export default Status