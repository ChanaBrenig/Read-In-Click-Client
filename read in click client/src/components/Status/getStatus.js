import React from 'react'
import  { useState, useEffect } from 'react'
import animation from '../completeWords/images/animation.gif'

const GetStatus=()=>{

        // const [nikud, setNikud] = useState('');
        // const [wordList, setWordList] = useState([]);
        const [flag, setFlag] = useState(false);
        const url = `http://localhost:3001/getPoints`;
        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => { setFlag(true) })
                .catch(err => console.log(err))
        }, []);
    return(
        <div>
           <h1 className="titleStatus"> יש לך כבר ____ נקודות</h1>
           <img src={animation} className="animation"></img>
            </div>)
}
export default GetStatus