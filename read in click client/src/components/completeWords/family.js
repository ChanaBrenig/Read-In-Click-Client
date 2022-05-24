import React from 'react'
import { useEffect, useState } from "react";
// import images from './images'
// import './images'
import ImageOne from './images/grandmother.gif'
import './family.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { StockWords, GetWord, check } from '../completeWords/stockWords';
import './images/baby.jpg'
import { ShowImages } from './showImages'
import grandfather from './images/grandfather.png'
import grandma from './images/grandma.JPG'
import father from './images/father.JPG'
import mother from './images/mother.png'
import brother from './images/‏‏boy.JPG'
import sister from './images/sister.jpg'
import baby from './images/baby.jpg'
import twins from './images/twins.jpg'
import { Check } from './stockWords'

// import { vOrX, CheckFunc } from './stockWords'

const titleStyle = {
    color: 'rgb(243, 78, 155)',
    fontSize: 'x-large',
    fontFamily: "Arial",
    fontWeight: 'bold'
}

const columns = [
    { id: 'theImage', label: <div style={titleStyle}>התמונה</div>, minWidth: 170 },
    { id: 'theWord', label: <div style={titleStyle}>המילה להשלמה</div>, minWidth: 100 },
    // { id: 'VX', label: <div style={titleStyle}>V/X</div>, minWidth: 100 },
    { id: 'stockWords', label: <div style={titleStyle}>מאגר מילים</div>, minWidth: 100 },
];

function createData(theImage, theWord, stockWords) {
    return { theImage, theWord,  stockWords };
}

let arrWordFamily = [<div id="1">סַ__א</div>, <div id="2">סָ__תָא</div>, <div id="3">__בָּא</div>, <div id="4">אִ__א</div>,
<div id="5">אָ__</div>, <div id="6">אָחוֹ__</div>, <div id="7">תִּי__ק</div>, <div id="8">תְּאוֹ__ם</div>,]

const rows = [
    createData(<ShowImages src={grandfather} />, <GetWord word={arrWordFamily[0]} />, <StockWords wordId={arrWordFamily[0].props.id} />),
    createData(<ShowImages src={grandma} />, <GetWord word={arrWordFamily[1]} />, <StockWords wordId={arrWordFamily[1].props.id} />),
    createData(<ShowImages src={father} />, <GetWord word={arrWordFamily[2]} />, <StockWords wordId={arrWordFamily[2].props.id} />),
    createData(<ShowImages src={mother} />, <GetWord word={arrWordFamily[3]} />, <StockWords wordId={arrWordFamily[3].props.id} />),
    createData(<ShowImages src={brother} />, <GetWord word={arrWordFamily[4]} />,  <StockWords wordId={arrWordFamily[4].props.id} />),
    createData(<ShowImages src={sister} />, <GetWord word={arrWordFamily[5]} />,  <StockWords wordId={arrWordFamily[5].props.id} />),
    createData(<ShowImages src={baby} />, <GetWord word={arrWordFamily[6]} />,  <StockWords wordId={arrWordFamily[6].props.id} />),
    createData(<ShowImages src={twins} />, <GetWord word={arrWordFamily[7]} />,  <StockWords wordId={arrWordFamily[7].props.id} />),
    createData('', ' ', ''),
    createData(    <a href="http://localhost:3000/choose" className="ahref">לעמוד הראשי</a>
    ),
];

// 'סָבְתָא', 'אַבָּא', 'אִמָּא', 'אָח', 'אָחוֹת', 'תִּינוֹק', 'תְּאוֹמִים'
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: '100%',
    },
});
export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    useEffect(() => {
        debugger
        console.log(arrWordFamily[0].id)
    },
        []);
    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell className="MuiTableCell-root"
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                            return ( 
                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'string' ? column.format(value) : value}
                                            </TableCell> 
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
   </Paper>

    );

}

