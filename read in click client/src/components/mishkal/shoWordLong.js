import React from 'react'
import './shoWordLong.css'

const ShoWordLong = (props) => {
    return (<div className="generalWordsLong">
        <div></div>
        <div>{props.wordList.words[0].words.map((item) => (
            <div className="wordsLong">{item}</div>
        ))}</div>

    </div>
    )


}
export default ShoWordLong;