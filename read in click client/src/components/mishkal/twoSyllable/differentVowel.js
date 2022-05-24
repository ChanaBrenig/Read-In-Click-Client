import ShoWord from '../shoWord'
import React, { useState, useEffect } from 'react';




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
        <div>
            <button onClick={() => setNikud('gina')}>gina</button>
            <button onClick={() => setNikud('chani')}>chani</button>
            <button onClick={() => setNikud('ola')}>ola</button>
            <button onClick={() => setNikud('tzura')}>tzura</button>
            <a href="http://localhost:3000/choose" className="ahref">לעמוד הראשי</a>

                    {flag ? <ShoWord wordList={wordList} /> : <div></div>}

        </div>
    )
}
export default DifferentVowel;