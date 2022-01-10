import React, {useState} from 'react'
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

const Points = ({ picture,isPointKnown,note,name}) => {
   
    const [isknown, setIsknown] = useState(isPointKnown);
    const [isnote, setIsnote] = useState(note);

    return (
    <div>
        <img src={""} />
        <br/>
        <br/>
        <Switch
            checked={isknown}
            onChange={(e)=>setIsknown(e.target.checked)}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <br/>
        <br/>
        <TextField
          id="standard-multiline-static"
          label={name}  
          multiline
          rows={4}
          defaultValue=""
          onChange={(e)=>setIsnote(e.target.value)}
        />
    </div>)
}

export default Points;