import ShoWord from '../shoWord'
import React, { useState, useEffect } from 'react';

import  '../onesyllable/oneSyllable.css'



const DifferentVowel = () => {

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
             <button className="btnOneSyllable" onClick={() => setNikud('kubutzkamatz')}>קובוץ קמץ</button>
             <button className="btnOneSyllable" onClick={() => setNikud('kamatzcholam')}>קמץ חולם</button>
             <button className="btnOneSyllable" onClick={() => setNikud('chiriksegol')}>חיריק צירה\ סגול</button>
        
             <button className="btnOneSyllable" onClick={() => setNikud('cholamshuruk')}>חולם שורוק</button>
             {/* <button className="btnOneSyllable" onClick={() => setNikud('meorav')}>מעורב- תירגול כללי 2 הברות </button> */}

            {/* <button onClick={() => setNikud('gina')}>gina</button>
            <button onClick={() => setNikud('chani')}>chani</button>
            <button onClick={() => setNikud('ola')}>ola</button>
            <button onClick={() => setNikud('tzura')}>tzura</button> */}
            <a href="http://localhost:3000/choose" className="ahref">לעמוד הראשי</a>

                    {flag ? <ShoWord wordList={wordList} /> : <div></div>}

        </div>
    )
}
export default DifferentVowel;