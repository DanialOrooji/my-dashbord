import React from 'react'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux'
import MuiDrawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import CommentIcon from '@mui/icons-material/Comment';
import ArticleIcon from '@mui/icons-material/Article';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { Link } from "react-router-dom";

export default function Slidebar() {
    const drawerWidth = 150;
    const [open, setOpen] = React.useState({ chart: false, text: false });

    const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });

    const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));
    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );
    const drawerShape = useSelector((state) => state.openDrawer.open)
    const check = useSelector((state) => state.openDrawer.check)
    const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
        '& .MuiTypography-root': {
            textAlign: 'start',
        },

    }));

    return (
        <Drawer
            containerStyle={{ height: 'calc(100% - 64px)', top: 64 }}
            sx={{
                '& .MuiDrawer-paper': {
                    height: '90%',
                    marginTop: 8
                },
            }}
            variant="permanent"
            anchor="right"
            open={drawerShape}
        >
            <List>
                <ListItem disablePadding>
                    <StyledListItemButton>

                        <ListItemIcon sx={{ justifyContent: check ? 'center' : '' }}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ opacity: check ? 1 : 0 }} >
                            داشبورد
                        </ListItemText>
                    </StyledListItemButton>
                </ListItem>


                <ListItem disablePadding>

                    <StyledListItemButton>
                        <ListItemIcon sx={{ justifyContent: check ? 'center' : '' }} >
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ opacity: check ? 1 : 0 }} >
                            نمودار
                        </ListItemText>
                        {!check ? '' : open.chart ? <ExpandLess onClick={() => setOpen({ ...open, chart: false })} /> : <ExpandMore onClick={() => setOpen({ ...open, chart: true })} />}
                    </StyledListItemButton>
                </ListItem>
                <Collapse in={open.chart} sx={{ paddingY: 0 }}>
                    <ListItem sx={{ paddingY: 0 }} >
                        <StyledListItemButton sx={{ pr: 4, paddingY: 0.5 }}>
                            <CommentIcon />
                            <ListItemText primary="کامنت ها" sx={{ pr: 1 }} />
                        </StyledListItemButton>
                    </ListItem>
                </Collapse>
                <Collapse in={open.chart} >
                    <ListItem sx={{ paddingY: 0 }}>
                        <StyledListItemButton sx={{ pr: 4, paddingY: 0.5 }}>
                            <ArticleIcon />
                            <ListItemText primary="مقاله ها" sx={{ pr: 1 }} />
                        </StyledListItemButton>
                    </ListItem>
                </Collapse>

                <ListItem disablePadding>

                    <StyledListItemButton>
                        <ListItemIcon sx={{ justifyContent: check ? 'center' : '' }}>
                            <TextSnippetIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ opacity: check ? 1 : 0 }} >
                            مقاله
                        </ListItemText>
                        {!check ? '' : open.text ? <ExpandLess onClick={() => setOpen({ ...open, text: false })} /> : <ExpandMore onClick={() => setOpen({ ...open, text: true })} />}
                    </StyledListItemButton>
                </ListItem>
                <Collapse in={open.text} sx={{ paddingY: 0 }}>
                    <ListItem sx={{ paddingY: 0 }} >
                        <StyledListItemButton sx={{ pr: 4, paddingY: 0.5 }}>
                            <TableRowsIcon />
                            <ListItemText primary="تمام مقالات" sx={{ pr: 1 }} />
                        </StyledListItemButton>
                    </ListItem>
                </Collapse>
                <Collapse in={open.text} >
                    <ListItem sx={{ paddingY: 0 }}>
                        <Link to="add-article">
                            <StyledListItemButton sx={{ pr: 4, paddingY: 0.5 }}>
                                <AddIcon />
                                <ListItemText primary="افزودن " sx={{ pr: 1 }} />
                            </StyledListItemButton>
                        </Link>
                    </ListItem>
                </Collapse>
                <Collapse in={open.text} >
                    <ListItem sx={{ paddingY: 0 }}>
                        <StyledListItemButton sx={{ pr: 4, paddingY: 0.5 }}>
                            <DeleteIcon />
                            <ListItemText primary="پاک کردن" sx={{ pr: 1 }} />
                        </StyledListItemButton>
                    </ListItem>
                </Collapse>
                <Collapse in={open.text} >
                    <ListItem sx={{ paddingY: 0 }}>
                        <StyledListItemButton sx={{ pr: 4, paddingY: 0.5 }}>
                            <EditIcon />
                            <ListItemText primary="ویرایش" sx={{ pr: 1 }} />
                        </StyledListItemButton>
                    </ListItem>
                </Collapse>
            </List>
            {/* <Divider /> */}
        </Drawer>)
}
