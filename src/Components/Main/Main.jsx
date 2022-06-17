import React from 'react'
import Header from '../Header/Header'
import Slidebar from '../Slidebar/Slidebar';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';


export default function Main() {
   
    return (
        <>
            <Header />
            <Box sx={{ flexGrow: 1 }} component="div">
            </Box>
            <Slidebar/>
            <Paper/>
        </>
    );
}
