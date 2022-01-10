import React, { useState, useEffect } from 'react'
import ShoWord from '../shoWord'


const OneSyllable = () => {
    const [nikud, setNikud] = useState('');
    useEffect(() => {
        fetch('localhost:3001/word/get' + nikud)
            .then(response => response.json())
            .then(data => <ShoWord data={data} />)
            .catch(error => { console.error(error) })
    }, [nikud])
      

    return (
        <div>
            <button onClick={() => setNikud('migdal')}>migdal</button>
            <button onClick={() => setNikud('targil')}>targil</button>
            <button onClick={() => setNikud('machsev')}>machsev</button>
            {/* <button onClick={() => setNikud('segol')}>segol</button>
            <button onClick={() => setNikud('shuruk')}>shuruk</button>
            <button onClick={() => setNikud('shurukcholam')}>shuruk</button>
            <button onClick={() => setNikud('chirikkamatz')}>chirik</button> */}

        </div>
    )
}
export default OneSyllable;