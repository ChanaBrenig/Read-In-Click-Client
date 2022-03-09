import React, { useState, useEffect } from 'react'
import ShoWord from '../shoWord'
import './oneSyllable.css'
import { useHistory } from "react-router-dom";

const OneSyllable = () => {
    const [nikud, setNikud] = useState('');
    const [wordList, setWordList] = useState([]);
    const [flag, setFlag] = useState(false);
    const url = `http://localhost:3001/getWords/${nikud}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => { setWordList(data); setFlag(true) })
            .catch(err => console.log(err))
    }, [nikud]);


    return (
        <div className="generalOneSyllable">
            <button className="btnOneSyllable" onClick={() => setNikud('kamatz')}>קמץ</button>
            <button className="btnOneSyllable" onClick={() => setNikud('chirik')}>חיריק</button>
            <button className="btnOneSyllable" onClick={() => setNikud('cholam')}>חולם</button>
            <button className="btnOneSyllable" onClick={() => setNikud('segol')}>סגול</button>
            <button className="btnOneSyllable" onClick={() => setNikud('shuruk')}>שורוק</button>

            {flag ? <ShoWord wordList={wordList} /> : <div></div>}

        </div>
    )
}


export default OneSyllable;