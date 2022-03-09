import React from 'react'


const ShoWord = (props) => {
    return(<div>
        <div>ShoWord Success!!!!!!!!!</div>
        <div>{ props.wordList.words[0].words.map((item)=>(
            <div>{item}</div>
        ))}</div> 
       
        </div>
    )


}
export default ShoWord;