import React, { useState, useEffect } from 'react';
import './family.css'
import './stockWords.css'
import { Button } from '@material-ui/core';
import animation from './images/animation.gif'
// import { useAlert } from 'react-alert'


export function StockWords(props) {
    // function colorFunc() {
    //     alert('hello')
    // }
    // const alert = useAlert()

    return (
        <div >
            <div className="myCenter">
                {/* <div>Stock Words</div> */}
                <button onClick={e => check(2, props.wordId)} className="btnStWrds" name="2">בְ</button>
                <button onClick={e => check(4, props.wordId)} className="btnStWrds" name="4">מָּ</button>
                <button onClick={e => check(3, props.wordId)} className="btnStWrds" name="3">אַ</button>
                <button onClick={e => check(5, props.wordId)} className="btnStWrds" name="5">ח</button>
                <button onClick={e => check(1, props.wordId)} className="btnStWrds" name="1">בָּ</button>
                <button onClick={e => check(6, props.wordId)} className="btnStWrds" name="6">ת</button>
                <button onClick={e => check(7, props.wordId)} className="btnStWrds" name="7">נוֹ</button>
                <button onClick={e => check(8, props.wordId)} className="btnStWrds" name="7">מִי</button>
            </div>
        </div>
      
    )

    function check(otId, wordId) {

        if (wordId == otId)
    
            return (
                alert('מצוין!! כל הכבוד!!!!  ') 
                //  vOrX("good")
                // <img src="animation">ggggggggggggggggg</img>
                // <img src={animation}></img>

    
            )
        else
            return (
                alert("נסה שנית") 
                // vOrX("Try Again")
    
            )
    }
 
}
//e.target.__reactEventHandlers$qwomyjwy6kh.otId
//otId="2" wordId="2"

// export const Check = (otId, wordId) => {
// debugger
//     if (wordId == otId)

//             console.log('Goooood!!!!');
//             else
//             console.log('Tru Again!!!!');
// }

// export function check(otId, wordId) {

//     if (wordId == otId)

//         return (
//             alert('Goood!!!!!!') 
//             //  vOrX("good")

//         )
//     else
//         return (
//             alert("Try Again") 
//             // vOrX("Try Again")

//         )
// }
export function vOrX(goodOrNot) {
    if (goodOrNot == "good")
        return <div>V</div>
    else
        return <div>X</div>
}

// export function CheckFunc() {
//     return (
//         <Check />
//     )
// }

export function GetWord(props) {
    return (<div className="word">{props.word}</div>)
}

