import React from 'react'
import { useHistory } from "react-router-dom";


const TwoSyllable = () => {
    let history=useHistory();
    
    function goToSameVowl() {
        history.push('/sameVowl')
    }
    function goToDifferentVowl() {
        history.push('/differentVowl')
    }
    return (
        <div> TwoSyllable</div>
    )
}
export default TwoSyllable;