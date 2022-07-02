import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux'
import {setPage} from '../redux/stateSlice'

export default function PaginationCustom({size}) {
    const realSize=(Math.round(size/8))+1;
    const dispatch = useDispatch()
    const handleChange = (event, value) => {
        dispatch(setPage(value))
      };
    return (
       <Box  component="div" className={realSize>5?'fixed bottom-7 right-[calc(50%-8rem)]':'fixed bottom-3 right-[calc(50%-4rem)]'}> 
        <Pagination
            size='large'
            count={realSize}
            onChange={handleChange}
            renderItem={(item) => (
                <PaginationItem
                    components={{ previous: ArrowForwardIcon, next: ArrowBackIcon }}
                    {...item}
                />
            )}
        />
        </Box>
    )
}
