import React from 'react'
import Header from '../Header/Header'
import Slidebar from '../Slidebar/Slidebar';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { useSelector } from 'react-redux'


export default function Main({page,pagination}) {
    const check = useSelector((state) => state.openDrawer.check)
    return (
        <div dir='rtl'>
            <Header />
            <Box sx={{ flexGrow: 1 }} component="div">
            </Box>
            <Slidebar/>
            <Paper elevation={24} sx={{
                height: '85vh',
                width: check?'86%':'92%',
                marginTop: 10,
                marginRight: check?20:10,
                overflow: 'hidden',
                lineBreak: 'auto',
                borderRadius: 5}} >
                {page}
                {pagination}
            </Paper>
            
        </div>
    );
}
