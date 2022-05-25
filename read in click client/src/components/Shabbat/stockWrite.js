import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react'


export default function StockWrite() {
   // const [value, setValue] = useState('');
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
            <TextField id="outlined-basic" label="מה בתמונה?" variant="outlined" />
            {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
            {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        </Box>
    );
}
