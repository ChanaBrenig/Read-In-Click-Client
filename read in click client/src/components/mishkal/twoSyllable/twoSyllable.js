// import React from 'react'
// import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import ShoWord from '../shoWord'
// import './oneSyllable.css'
import { useHistory } from "react-router-dom";



const TwoSyllable = () => {

    let history = useHistory();

    const sameVowl = () => {
        history.push('/differentVowl')
    }
    const differentVowl = () => {
        history.push('/sameVowl')
    }
  
    return (
        <div className="generalMishkat">
         
            <div className="btns">
                <button className="btn" onClick={sameVowl}>הברות דומות</button>
                <button className="btn" onClick={differentVowl}>הברות שונות  </button>
                <a href="http://localhost:3000/choose" className="ahref">לעמוד הראשי</a>

            </div>
        </div>)
}



    // return (
        // <div> TwoSyllable</div>
        // <div className="generalOneSyllable">
        // <div className="btns">
             {/* <button className="btnOneSyllable" onClick={() => setNikud('kamatzkamatz')}>קמץ\ פתח</button>
             <button className="btnOneSyllable" onClick={() => setNikud('chirikchirik')}>חיריק חיריק</button>
             <button className="btnOneSyllable" onClick={() => setNikud('segolsegol')}>צירה\ סגול</button>
             <button className="btnOneSyllable" onClick={() => setNikud('cholamcholam')}>חולם חולם</button>
             <button className="btnOneSyllable" onClick={() => setNikud('shurukshuruk')}>שורוק\ קובוץ</button>
             <button className="btnOneSyllable" onClick={() => setNikud('kubutzkamatz')}>קובוץ קמץ</button>
             <button className="btnOneSyllable" onClick={() => setNikud('kamatzcholam')}>קמץ חולם</button>
             <button className="btnOneSyllable" onClick={() => setNikud('chiriksegol')}>חיריק צירה\ סגול</button>
        
             <button className="btnOneSyllable" onClick={() => setNikud('cholamshuruk')}>חולם שורוק</button>
             <button className="btnOneSyllable" onClick={() => setNikud('meorav')}>מעורב- תירגול כללי 2 הברות </button> */}

        {/* <button className="btn" onClick={goToSameVowl}>הברות דומות</button> */}
        {/* <button className="btn" onClick={goToDifferentVowl}>הברות שונות </button> */}

             {/* <button className="btnOneSyllable" onClick={() => setNikud('kamatzshuruk')}>קמץ שורוק</button> */}
             {/* <button className="btnOneSyllable" onClick={() => setNikud('cholamkamatz')}>חולם קמץ</button> */}
             {/* <button className="btnOneSyllable" onClick={() => setNikud('shurukamatz')}>שורוק קמץ</button> */}
        {/* {flag ? <ShoWord wordList={wordList} /> : <div></div>} */}
        {/* </div> */}
     {/* </div> */}
    //  )
// }
export default TwoSyllable;