import ShoWord from '../shoWord'
import React, { useState, useEffect } from 'react';

const SameVowel = () => {
    const [nikud, setNikud] = useState('')
    useEffect(() => {

        fetch('localhost:3001/word/get' + nikud)
            .then(response => response.json())
            .then(data => <ShoWord data={data} />)
            .catch(error => { console.error(error) })
     } , [nikud])
    
    return (
        <div>
            <button onClick={() => setNikud('kamatzkamatz')}>kamatzkamatz</button>
            <button onClick={() => setNikud('chirikchirik')}>chirikchirik</button>
            <button onClick={() => setNikud('cholamcholam')}>cholamcholam</button>
            {/* <button onClick={() => setNikud('shurukshuruk')}>shurukshuruk</button>
            <button onClick={() => setNikud('segolsegol')}>segolsegol</button> */}
        </div>
    )

}
export default SameVowel;