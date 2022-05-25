import React from 'react'
import { useHistory } from "react-router-dom";
// import './choose.css'
import { Button } from '@material-ui/core';

const ChooseGame = () => {
    let history = useHistory();

    function goToGameA() {
        history.push('/GameA')
    }
    function goToGameB() {
        history.push('/GameB')
    }
    function goToGameC() {
        history.push('/GameC')
    }


    //Downloads
    return (
        <div className="generalDiv">
                        <div className='div'>באיזה ניקוד נבחר לתרגל?</div>

            <div className="btns">

                <button className="btn" onClick={goToGameA}>פתח קמץ</button>
                <button className="btn" onClick={goToGameB}>צירה וסגול</button>
                <button className="btn" onClick={goToGameC}>חיריק וחולם</button>
                <a href="http://localhost:3000/choose" className="ahref">לעמוד הראשי</a>


                {/* <button className="btn">Button 6</button> */}
            </div>
        </div>
    )
}

export default ChooseGame;