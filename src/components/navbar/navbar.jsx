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
import { LocalGasStation } from '@mui/icons-material';
import { Link } from '@mui/material';

import Token from '../../services/token'
import jwtDecode from "jwt-decode";
import { useEffect } from 'react';
import auth_services from '../../services/auth_services';
import { useState } from 'react';

const pages = ['About Us', 'How to Use'];
const settings = ['Dashboard', 'Logout', 'Login'];


const Navbar = () => {
    const [displayAvatar, setDisplayAvatar] = useState(false)
    const [token, setToken] = useState()
    const [loggedUser, setLoggedUser] = useState()
    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        if (Token.getAccessToken()) {
            var t = jwtDecode(Token.getAccessToken())
            setToken(t)
            try {
                const response = await auth_services.getUser(t.user_id)
                if (response.data.error) {
                    return
                }
                if (response.data.user) {
                    console.log("NAVBAR USER", response.data.user);
                    setLoggedUser(response.data.user)
                    setDisplayAvatar(true)
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

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
        <AppBar position="static" sx={{ backgroundColor: '#1F7A8C' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
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
                            color: 'inherit',
                            textDecoration: 'none',
                            "&:hover": {
                                color: 'white',
                            },
                        }}
                    >
                        <LocalGasStation />FuelQ
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
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link sx={{ textDecoration: 'none', "&:hover": { color: 'black' } }} underline='none' href='/about'><Typography textAlign="center">About Us</Typography></Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link sx={{ textDecoration: 'none', "&:hover": { color: 'black' } }} underline='none' href='how-to-use'><Typography textAlign="center">How to use</Typography></Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            "&:hover": {
                                color: 'white',
                            },
                        }}
                    >
                        <LocalGasStation />FuelQ
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            // key={page}
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2, color: 'white', display: 'block', "&:hover": {
                                    color: 'white',
                                },
                            }}
                            href="/about"
                        >
                            About Us
                        </Button>
                        <Button
                            // key={page}
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2, color: 'white', display: 'block', "&:hover": {
                                    color: 'white',
                                },
                            }}
                            href="/how-to-use"
                        >
                            How to use
                        </Button>
                    </Box>

                    {displayAvatar &&
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    {token.user_type === "Vehicle-Owner" && <Avatar sx={{ bgcolor: '#022B3A' }}>{loggedUser.user.firstName[0] + loggedUser.user.lastName[0]}</Avatar>}
                                    {token.user_type !== "Vehicle-Owner" && <Avatar sx={{ bgcolor: '#022B3A' }}>{loggedUser.firstName[0] + loggedUser.lastName[0]}</Avatar>}
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <div className="info">
                                    {token.user_type === "Vehicle-Owner" && <h6 style={{ padding: '5px', textAlign: 'center' }}>{`${loggedUser.user.firstName} ${loggedUser.user.lastName}`}</h6>}
                                    {token.user_type !== "Vehicle-Owner" && <h6 style={{ padding: '5px', textAlign: 'center' }}>{`${loggedUser.firstName} ${loggedUser.lastName}`}</h6>}

                                    {token.user_type == "Vehicle-Owner" && <p style={{ padding: '5px', textAlign: 'center' }}>NIC No: {loggedUser.NIC}</p>}
                                </div>
                                <MenuItem style={{ textAlign: 'center' }} onClick={handleCloseUserMenu}>
                                    <Link
                                        sx={{ textDecoration: 'none', "&:hover": { color: 'black' } }}
                                        href={token.user_type === "Admin" ? '/admin-dashboard' : (token.user_type === "Vehicle-Owner" ? '/vo-dashboard' : (token.user_type === "Fuel-Station-Manager" && '/fs-dashboard' ))}>
                                        <Typography textAlign="center">Dashboard</Typography>
                                    </Link>
                                </MenuItem>
                                <MenuItem style={{ textAlign: 'center' }} onClick={handleCloseUserMenu}>
                                    <Link sx={{ textDecoration: 'none', "&:hover": { color: 'black' } }} href='/logout'><Typography textAlign="center">Logout</Typography></Link>
                                </MenuItem>
                            </Menu>
                        </Box>
                    }

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
