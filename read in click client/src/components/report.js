import React from 'react'
import Points from './points'
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const Report = () => {
const pointsArr = [{ name: "קמץ", isKnown: false, picture: "images/....png" }, { name: "פתח", isKnown: true, picture: "images/....png" }];
    return (      
        <div>
            {pointsArr.map((point) => <Points picture={""} isPointKnown={point.isKnown} note={point.isnote} name={point.name}  />)}
            
            <TextField
            id="standard-multiline-static"
            label="הערה כללית"
            multiline
            rows={4}
            defaultValue=""
            onChange={(e)=>(e.target.value)}
            />
            <br/>
            <br/>
            <br/>
            <Button>שמירה</Button>
        </div>
    )
}
export default Report;