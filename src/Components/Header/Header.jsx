import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux'
import { open, close } from '../../redux/stateSlice'
import { styled, alpha, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Search = styled('div')(({ theme }) => ({

    position: 'relative',
    borderRadius: 15,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
    },
}));
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    '& .MuiToolbar-root': {
        paddingRight: 12
    },
}));

export default function Header() {
    const dispatch = useDispatch()
    const theme = useTheme();
    function openDrawer() {
        dispatch(open())
    }
    function closeDrawer() {
        dispatch(close())
    }
    const drawerShape = useSelector((state) => state.openDrawer.open)
    const check = useSelector((state) => state.openDrawer.check)

    return (
        <StyledAppBar position="fixed">
            <Toolbar>

                {check ?
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ml: 1 }}
                        onClick={closeDrawer}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    :
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ml: 1 }}
                        onClick={openDrawer}>
                        <MenuIcon />
                    </IconButton>
                }
                <Typography variant="h6" component="div" >
                    مدیریت وبلاگ شخصی
                </Typography>
                <Box sx={{ flexGrow: 1 }}>

                </Box>
               
                <Search dir='ltr'>
                    <SearchIconWrapper >
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <IconButton
                    color="inherit"
                >
                    <PersonIcon />
                </IconButton>

            </Toolbar>
        </StyledAppBar>
    )
}
