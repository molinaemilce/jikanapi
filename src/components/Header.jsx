import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AnimationIcon from '@mui/icons-material/Animation';

import { Link, Outlet } from "react-router-dom";

const pages = ['Categorias', 'Populares', 'Destacados'];
const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AnimationIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                        <Typography

                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                            }}
                            className="color-text"
                        >
                            JIKANAPIs
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem key="topMangas" onClick={handleCloseNavMenu} className="menu-item">
                                    <Link to="/">
                                        Home    
                                    </Link>
                                    <Link to="/topmangas">
                                        Top Mangas
                                    </Link>
                                    <Link to="/recommendations">
                                        Recommendations
                                    </Link>

                                </MenuItem>
                            </Menu>
                        </Box>
                        <AnimationIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                            }}
                            className="color-text"
                            href="/"
                        >

                            JIKANAPI
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Link
                                to="/s"
                                key=""
                                onClick={handleCloseNavMenu}
                                style={{ my: 2, color: 'white', display: 'block', paddingLeft: "10px" }}
                            >
                                Home
                            </Link>

                            <Link
                                to="/topmangas"
                                key="topmangas"
                                onClick={handleCloseNavMenu}
                                style={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Top Mangas
                            </Link>
                            <Link
                                to="/recommendations"
                                key="recommendations"
                                onClick={handleCloseNavMenu}
                                style={{ my: 2, color: 'white', display: 'block', paddingLeft: "10px" }}
                            >
                                Recommendations
                            </Link>

                        </Box>


                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header