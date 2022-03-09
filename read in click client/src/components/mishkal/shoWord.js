import React from 'react'
import './shoWord.css'

const ShoWord = (props) => {
    return (<div className="generalWords">
        <div></div>
        <div>{props.wordList.words[0].words.map((item) => (
            <div className="words">{item}</div>
        ))}</div>

    </div>
    )


}
export default ShoWord;