// import React from 'react'
// import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import ShoWord from '../shoWord'
// import './oneSyllable.css'
import { useHistory } from "react-router-dom";



const TwoSyllable = () => {
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




// const TwoSyllable = () => {
//     let history=useHistory();
    
//     function goToSameVowl() {
//         history.push('/sameVowl')
//     }
//     function goToDifferentVowl() {
//         history.push('/differentVowl')
//     }
    return (
        // <div> TwoSyllable</div>
        // <div className="generalOneSyllable">
        <div className="btns">
             <button className="btnOneSyllable" onClick={() => setNikud('kamatzkamatz')}>קמץ\ פתח</button>
             <button className="btnOneSyllable" onClick={() => setNikud('chirikchirik')}>חיריק חיריק</button>
             <button className="btnOneSyllable" onClick={() => setNikud('segolsegol')}>צירה\ סגול</button>
             <button className="btnOneSyllable" onClick={() => setNikud('cholamcholam')}>חולם חולם</button>
             <button className="btnOneSyllable" onClick={() => setNikud('shurukshuruk')}>שורוק\ קובוץ</button>
             <button className="btnOneSyllable" onClick={() => setNikud('kubutzkamatz')}>קובוץ קמץ</button>
             <button className="btnOneSyllable" onClick={() => setNikud('kamatzcholam')}>קמץ חולם</button>
             {/* <button className="btnOneSyllable" onClick={() => setNikud('cholamkamatz')}>חולם קמץ</button> */}
             <button className="btnOneSyllable" onClick={() => setNikud('chiriksegol')}>חיריק צירה\ סגול</button>
             {/* <button className="btnOneSyllable" onClick={() => setNikud('kamatzshuruk')}>קמץ שורוק</button> */}
             {/* <button className="btnOneSyllable" onClick={() => setNikud('shurukamatz')}>שורוק קמץ</button> */}
             <button className="btnOneSyllable" onClick={() => setNikud('cholamshuruk')}>חולם שורוק</button>
             <button className="btnOneSyllable" onClick={() => setNikud('meorav')}>מעורב- תירגול כללי 2 הברות </button>
        {/* <button className="btn" onClick={goToSameVowl}>הברות דומות</button> */}
        {/* <button className="btn" onClick={goToDifferentVowl}>הברות שונות </button> */}
        {flag ? <ShoWord wordList={wordList} /> : <div></div>}
        </div>
    // </div>
    )
}
export default TwoSyllable;