import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux'



export default function AllArticle() {
    const headers = useSelector((state) => state.addArticle.information.h1)

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
                    {headers.map((header, index) => (


                        <TableRow
                            key={index}
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
