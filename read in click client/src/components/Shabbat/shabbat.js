import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StockWrite from './stockWrite'
import bouquet from './image/bouquet.jpg'
import wine from './image/wine.jpg'
import bracha from './image/bracha.gif'
import chalot from './image/chalot.jpg'
import flowers from './image/flowers.gif'
import candles from './image/wine.jpg'
import zifzuf from './image/zifzuf.gif'
import goblet from './image/goblet.jpg'
import './shabbat.css'
import useSpeechToText from 'react-hook-speech-to-text';
import CheckValue from './checkValue'


// const shabbatImage = [
//     "https://www.canstockphoto.co.il/%D7%A9%D7%91%D7%AA-%D7%9B%D7%9B%D7%A8-%D7%A6%D7%90%D7%9C%D7%90%D7%94-bread-2824256.html",
//     ,
//     "https://www.canstockphoto.co.il/%D7%9E%D7%92%D7%93%D7%9C-%D7%9B%D7%A1%D7%A3-%D7%A8%D7%A7%D7%97-35188133.html",
//     "https://www.canstockphoto.co.il/%D7%A2%D7%A8%D7%91-%D7%A9%D7%91%D7%AA-18694685.html",
//     "https://www.canstockphoto.co.il/%D7%98%D7%A7%D7%A1-%D7%A9%D7%91%D7%AA-1767337.html",
//     "https://www.canstockphoto.co.il/%D7%90%D7%95%D7%9B%D7%9C-%D7%91%D7%99%D7%A9%D7%95%D7%9C-bread-9607200.html",
// ]

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

const shabbatImage = [bouquet, wine, bracha, chalot, flowers, candles, zifzuf, goblet]

const ezer =
    shabbatImage.map((img) =>
        < img src="img" ></img >)

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('', 159, '', '', 4.0),
    createData('', 159, '', '', 4.0),
    createData('', 159, '', '', 4.0),
    createData('', 159, '', '', 4.0),
    createData('', 159, '', '', 4.0),
    createData('', 159, '', '', 4.0),
    createData('', 237, '', '', 4.3),
    createData('', 262, '', '', 6.0),
];

export default function Shabbat() {
    return (
        <TableContainer component={Paper} className="tableShabbat">
            <Table sx={{ minWidth: 650 }} aria-label="caption table" className="tableShabbat">
                <caption>שבת שלום!!!</caption>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">תמונה</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">מה מצויר בתמונה? </TableCell>
                        <TableCell align="right">בדיקה </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shabbatImage.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right"><img className="imgShabbat" src={row}></img></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"><StockWrite /></TableCell>
                            <TableCell align="right"><CheckValue /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}
