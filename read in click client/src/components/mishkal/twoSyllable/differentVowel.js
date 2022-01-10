import ShoWord from '../shoWord'
import React, { useState, useEffect } from 'react';

const DifferentVowel = () => {

    const [nikud, setNikud] = useState('')
    useEffect(() => {

        fetch('localhost3001/word/get' + nikud)
            .then(response => response.json())
            .then(data => <ShoWord data={data} />)
            .catch(error => { console.error(error) })
    }, [nikud] )
 
    return (
        <div>
            <button onClick={() => setNikud('gina')}>gina</button>
            <button onClick={() => setNikud('chani')}>chani</button>
            <button onClick={() => setNikud('ola')}>ola</button>
            <button onClick={() => setNikud('tzura')}>tzura</button>
        </div>
    )
}
export default DifferentVowel;