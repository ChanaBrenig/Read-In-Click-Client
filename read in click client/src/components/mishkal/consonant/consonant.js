import React, { useState, useEffect } from 'react'
import ShoWordLong from '../shoWordLong'
import  '../onesyllable/oneSyllable.css'


const Consonant = () => {
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
        <div>
                        <div className='d1'>קריאת מילים בעלות שלוש הברות ומעלה</div>

            {/* <button onClick={() => setNikud('migdal')}>migdal</button> */}
            {/* <button onClick={() => setNikud('targil')}>targil</button> */}
            {/* <button onClick={() => setNikud('machsev')}>machsev</button> */}
            {/* <button onClick={() => setNikud('machsev')}>machsev</button> */}
            <button className="btnOneSyllable" onClick={() => setNikud('consonant')}>למעבר למילים =></button>
            <a href="http://localhost:3000/choose" className="ahref">לעמוד הראשי</a>
            {flag ? <div className='dd'>מילים בעלות שלוש הברות ומעלה</div>: <div></div>}

            {/* <button onClick={() => setNikud('segol')}>segol</button>
            <button onClick={() => setNikud('shuruk')}>shuruk</button>
            <button onClick={() => setNikud('shurukcholam')}>shuruk</button>
            <button onClick={() => setNikud('chirikkamatz')}>chirik</button> */}
            {flag ? <ShoWordLong wordList={wordList} /> : <div></div>}


        </div>
    )
}
export default Consonant;