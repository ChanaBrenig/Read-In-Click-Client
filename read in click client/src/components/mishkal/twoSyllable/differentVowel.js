import ShoWord from '../shoWord'
import React, { useState, useEffect } from 'react';

import  '../onesyllable/oneSyllable.css'



const DifferentVowel = () => {

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
        <div className="generalOneSyllable">
        <div className='title'>קריאת מילים בעלות שתי הברות שונות</div>

            <div className='m'><table><tr>
             <td><button className="btnOneSyllable" onClick={() => {setNikud('kubutzkamatz');setName('קובוץ קמץ')}}>קובוץ קמץ</button></td>
             <td><button className="btnOneSyllable" onClick={() => {setNikud('kamatzcholam');setName('קמץ חולם')}}>קמץ חולם</button></td>
             <td><button className="btnOneSyllable" onClick={() => {setNikud('chiriksegol');setName('חיריק צירה או סגול')}}>חיריק צירה\ סגול</button></td>        
             <td><button className="btnOneSyllable" onClick={() => {setNikud('cholamshuruk');setName('חולם שורוק')}}>חולם שורוק</button></td>
             </tr></table></div>
             {/* <button className="btnOneSyllable" onClick={() => setNikud('meorav')}>מעורב- תירגול כללי 2 הברות </button> */}

            {/* <button onClick={() => setNikud('gina')}>gina</button>
            <button onClick={() => setNikud('chani')}>chani</button>
            <button onClick={() => setNikud('ola')}>ola</button>
            <button onClick={() => setNikud('tzura')}>tzura</button> */}
            <a href="http://localhost:3000/choose" className="ahref">לעמוד הראשי</a>
            {flag ? <div className='dd'>מילים בעלות שתי הברות שונות בניקוד {name}</div>: <div></div>}

                    {flag ? <ShoWord wordList={wordList} /> : <div></div>}

        </div>
    )
}
export default DifferentVowel;