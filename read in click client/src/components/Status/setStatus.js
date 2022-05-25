

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import animation from '../completeWords/images/animation.gif'


function createData(name, jj, nikud1, nikud2, nikud3) {
    return { name, jj, nikud1, nikud2, nikud3 };
}

const rows = [
    createData('קריאת מילים', <button className="btnSetStatus"></button>, 6.0, 24, 4.0),
    createData('השלמת אותיות', 237, 9.0, 37, 4.3),
    createData('כתיבת מילים', 262, 16.0, 24, 6.0),
    createData('כתיבת טקסט', 262, 16.0, 24, 6.0),
    createData('משחק הזיכרון', 262, 16.0, 24, 6.0),
    createData('משחק רגשות', 262, 16.0, 24, 6.0),
    //   createData('Eclair', 262, 16.0, 24, 6.0),
];



const GetStatus=(props)=>{

    // const [nikud, setNikud] = useState('');
    // const [wordList, setWordList] = useState([]);
    // const [flag, setFlag] = useState(false);
    // const url = `http://localhost:3001/getPoints`;
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => { setFlag(true) })
    //         .catch(err => console.log(err))
    // }, []);
return(
    <div>
       <h1 className="titleStatus"> יש לך כבר {props.getPoint} נקודות</h1>
       <img src={animation} className="animation"></img>
        </div>)
}





export default function SetStatus() {
    // let history = useHistory();

    const [point, setPoint] = useState(0);
    // const [wordList, setWordList] = useState([]);
    const [flag, setFlag] = useState(false);
    const [newFlag, setNewFlag] = useState(false);
    // const url = `http://localhost:3001/setPoints`;
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => { (alert("")); setFlag(true) })
    //         .catch(err => console.log(err))
    // }, [point]);
    // const getStatus = () => {
    //     history.push('/getStatus')
    // }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption>A basic table example with a caption</caption>
                <TableHead>
                    <TableRow>
                        <TableCell>סוג האימון</TableCell>
                        <TableCell align="right"> </TableCell>
                        <TableCell align="right">ניקוד 1</TableCell>
                        <TableCell align="right">ניקוד 2</TableCell>
                        <TableCell align="right">ניקוד 3</TableCell>
                        {/* <TableCell align="right">לאישור</TableCell> */}
                    </TableRow>

                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"><button onClick={() => setPoint((point ) + 10)}  className="btnSetStatus">10</button></TableCell>
                            <TableCell align="right"><button onClick={() => setPoint(( point ) + 20) } className="btnSetStatus">20</button></TableCell>
                            <TableCell align="right"><button onClick={() => setPoint((point ) + 30)} className="btnSetStatus">30</button></TableCell>
                            {/* <TableCell align="right"><button onClick={() => setFlag((point ) + 30)} className="btnSetStatus">30</button></TableCell> */}
                      
                        </TableRow>
                        
                    ))    
                    }
                </TableBody>
            <button onClick={()=>setNewFlag(true)} getPoint={point} className="btnGetStatus">לצפיה בסטטוס</button>
            {newFlag ? <GetStatus getPoint={point}/> : <div></div>}

            </Table>

            {flag ? alert("הנתונים נשמרו במערכת") : <div></div>}
         {  console.log(point)} 

        </TableContainer>
    );
}

// export default SetStatus
