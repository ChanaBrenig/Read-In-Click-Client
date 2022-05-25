import React, { useState, useEffect } from 'react'
import ShoWord from '../shoWord'
import './oneSyllable.css'
import { useHistory } from "react-router-dom";
import { textAlign } from '@mui/system';

const OneSyllable = () => {
    const [nikud, setNikud] = useState('');
    const [wordList, setWordList] = useState([]);
    const [flag, setFlag] = useState(false);
    const [name, setName] = useState('');
    const url = `http://localhost:3001/getWords/${nikud}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => { setWordList(data); setFlag(true) })
            .catch(err => console.log(err))
    }, [nikud]);


    return (
        <div className="">
            <div className='title'>קריאת מילים בעלות הברה אחת</div>
            <div style={{textAlign:"center"}}>
            <button className="btnOneSyllable" onClick={() => {setNikud('kamatz'); setName('קמץ')}}>קמץ</button>
            <button className="btnOneSyllable" onClick={() => {setNikud('chirik');setName('חיריק')}}>חיריק</button>
            <button className="btnOneSyllable" onClick={() => {setNikud('cholam');setName('חולם')}}>חולם</button>
            <button className="btnOneSyllable" onClick={() => {setNikud('segol');setName('סגול')}}>סגול</button>
            <button className="btnOneSyllable" onClick={() => {setNikud('shuruk');setName('שורוק')}}>שורוק</button></div>
            <a href="http://localhost:3000/choose" className="ahref">לעמוד הראשי</a>
            {flag ? <div className='dd'>מילים בעלות הברה אחת בניקוד {name}</div>: <div></div>}
            {flag ? <ShoWord wordList={wordList} /> : <div></div>}

        </div>
    )
}


export default OneSyllable;