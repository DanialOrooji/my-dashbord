import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux'



export default function AllArticle() {
    const headers = useSelector((state) => state.openDrawer.h1)
    const pageNumber = useSelector((state) => state.openDrawer.pageArticle)
    let numbersCopy = [];
    
    for (let i = (pageNumber - 1) * 8; (i < headers.length && i < pageNumber * 8); i++) {
        numbersCopy[i] = headers[i];
    }
    console.log(numbersCopy);
    console.log(pageNumber);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">شماره</TableCell>
                        <TableCell align="right">مقاله</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        numbersCopy.map((header, index) => (

                            <TableRow
                                key={((pageNumber - 1) * 8) + 1}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{index}</TableCell>
                                <TableCell align="right">{header}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}
