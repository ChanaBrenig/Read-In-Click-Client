import React, { useState, useEffect } from 'react';
import ShoWord from '../shoWord'

const SameVowel = () => {
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
            <table><tr>
             <td> <button className="btnOneSyllable" onClick={() => setNikud('kamatzkamatz')}>קמץ\ פתח</button></td>
             <td><button className="btnOneSyllable" onClick={() => setNikud('chirikchirik')}>חיריק חיריק</button></td>
             <td><button className="btnOneSyllable" onClick={() => setNikud('segolsegol')}>צירה\ סגול</button></td>
             <td><button className="btnOneSyllable" onClick={() => setNikud('cholamcholam')}>חולם חולם</button></td>
             <td> <button className="btnOneSyllable" onClick={() => setNikud('shurukshuruk')}>שורוק\ קובוץ</button></td>
             
             </tr></table>
             <a href="http://localhost:3000/choose" className="ahref">לעמוד הראשי</a>

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