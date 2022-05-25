import React, { useState, useEffect } from 'react';
import ShoWord from '../shoWord'
import  '../onesyllable/oneSyllable.css'

const SameVowel = () => {
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
        <div >
            <div className='d1'>קריאת מילים בעלות שתי הברות דומות</div>
            <div className='mm'>
            <table ><tr>
            <td><button className="btnOneSyllable" onClick={() => {setNikud('kamatzkamatz'); setName('קמץ או פתח')}}>קמץ\ פתח</button></td>
            <td><button className="btnOneSyllable" onClick={() => {setNikud('chirikchirik');setName('חיריק חיריק')}}>חיריק חיריק</button></td>
            <td><button className="btnOneSyllable" onClick={() => {setNikud('segolsegol');setName('צירה או סגול')}}>צירה\ סגול</button></td>
            <td><button className="btnOneSyllable" onClick={() => {setNikud('cholamcholam');setName('חולם חולם')}}>חולם חולם</button></td>
            <td><button className="btnOneSyllable" onClick={() => {setNikud('shurukshuruk');setName('שורוק או קובוץ')}}>שורוק\ קובוץ</button></td></tr></table></div>
            <a href="http://localhost:3000/choose" className="ahref">לעמוד הראשי</a>
            {flag ? <div className='dd'>מילים בעלות שתי הברות דומות בניקוד {name}</div>: <div></div>}
            { /* <button onClick={() => setNikud('kamatzkamatz')}>kamatzkamatz</button>
            <button onClick={() => setNikud('chirikchirik')}>chirikchirik</button>
            <button onClick={() => setNikud('cholamcholam')}>cholamcholam</button> */
            /* <button onClick={() => setNikud('shurukshuruk')}>shurukshuruk</button>
    <button onClick={() => setNikud('segolsegol')}>segolsegol</button> */ }
            {flag ? <ShoWord wordList={wordList} /> : <div></div>}

        </div>
    )

}
export default SameVowel