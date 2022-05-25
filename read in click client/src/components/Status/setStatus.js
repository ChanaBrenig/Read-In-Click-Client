// import React from 'react'


// const SetStatus = () => {


//     return (
//         <div>setStatus</div>)
// }
// export default SetStatus

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react'


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

export default function SetStatus() {

    const [point, setPoint] = useState(0);
    // const [wordList, setWordList] = useState([]);
    const [flag, setFlag] = useState(false);
    const url = `http://localhost:3001/setPoints`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => { (alert("")); setFlag(true) ;})
            .catch(err => console.log(err))
    }, [point]);
    console.log(point);
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
                    </TableRow>

                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"><button onClick={() => setPoint((point)+ 10)} className="btnSetStatus">10</button></TableCell>
                            <TableCell align="right"><button onClick={() => setPoint((point)   + 20)} className="btnSetStatus">20</button></TableCell>
                            <TableCell align="right"><button onClick={() => setPoint((point) + 30)} className="btnSetStatus">30</button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {flag ? alert("הנתונים נשמרו במערכת") : <div></div>}

        </TableContainer>
    );
}
// export default SetStatus
