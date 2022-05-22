import React from 'react'
import { useHistory } from "react-router-dom";
import './mishkal.css'

const Mishkal = () => {

    let history = useHistory();

    const oneSyllable = () => {
        history.push('/oneSyllable')
    }
    const twoSyllable = () => {
        history.push('/twoSyllable')
    }
    const consonant = () => {
        history.push('/consonant')
    }
    return (
        <div className="generalMishkat">
            <h1 className="myTitle">ברוכים הבאים למשקל!!!</h1>
            <h2 className="myTitleH2">מהו הכפתור שברצונך?</h2>
            <div className="btns">
                <button className="btn" onClick={oneSyllable}>הברה אחת</button>
                <button className="btn" onClick={twoSyllable}>שתי הברות </button>
                <button className="btn" onClick={consonant}>שלוש הברות ומעלה </button>
            </div>
        </div>)
}

export default Mishkal;