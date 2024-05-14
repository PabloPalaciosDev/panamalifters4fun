import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Container, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import { Link } from 'react-router-dom';
import logopanamalifters from '../../assets/img/logo-panamalifters-notbg.png';

export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElAtletas, setAnchorElAtletas] = React.useState(null);
    const open = Boolean(anchorEl);
    const openAtletas = Boolean(anchorElAtletas);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickAtletas = (event) => {
      event.stopPropagation();
        setAnchorElAtletas(event.currentTarget);
    };

    const handleCloseAtletas = () => {
        setAnchorElAtletas(null);
    };

    return (
        <nav>
            <AppBar position="fixed" sx={{ width: '100%', backgroundColor: '#153a4b' }}>
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{
                            display: { xs: 'none', xl: 'flex' },
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            <img src={logopanamalifters} alt="logo-fpp" style={{ width: '250px', padding: 15 }} />
                        </Link>
                        <Link
                            to="/"
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <HomeOutlinedIcon sx={{ color: 'white', fontSize: 35 }} />
                            <Button sx={{ color: 'white', fontWeight: 'bold' }}>Inicio</Button>
                        </Link>
                        <Link
                            to="https://www.powerlifting.sport/fileadmin/ipf/data/rules/technical-rules/spanish/Reglas-esp-2024.pdf"
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <BookOutlinedIcon sx={{ color: 'white', fontSize: 30 }} />
                            <Button sx={{ color: 'white', fontWeight: 'bold' }}>Reglamento IPF</Button>
                        </Link>
                        <Button sx={{ color: 'white', fontWeight: 'bold' }} onClick={handleClickAtletas}>
                            <AssignmentIndOutlinedIcon sx={{ color: 'white', fontSize: 30 }} />
                            Perfiles de Atletas
                            <ExpandMoreIcon sx={{ color: 'white', fontSize: 35 }} />
                        </Button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElAtletas}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={openAtletas}
                            onClose={handleCloseAtletas}
                        >
                            <MenuItem onClick={handleCloseAtletas}>
                                <Link
                                    to="/atletas-masc"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        alignItems: 'center',
                                        display: 'flex'
                                    }}
                                >
                                    <ManIcon sx={{ color: 'white', fontSize: 30 }} />
                                    Categoría Masculina
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseAtletas}>
                                <Link
                                    to="/atletas-fem"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        alignItems: 'center',
                                        display: 'flex'
                                    }}
                                >
                                    <WomanIcon sx={{ color: 'white', fontSize: 30 }} />
                                    Categoría Femenina
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Toolbar>

                    <Toolbar
                        sx={{
                            display: { xs: 'flex', md: 'flex', xl: 'none' },
                            justifyContent: 'space-between',
                        }}
                    >
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                            <MenuIcon sx={{ color: 'white', fontSize: 40 }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link
                                    to="/"
                                    style={{
                                        textDecoration: 'none',
                                        color: '#153a4b',
                                        fontWeight: 'bold',
                                        alignItems: 'center',
                                        display: 'flex'
                                    }}
                                >
                                    <HomeOutlinedIcon sx={{ color: '#153a4b', fontSize: 35 }} />
                                    Inicio
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link
                                    to="https://www.powerlifting.sport/fileadmin/ipf/data/rules/technical-rules/spanish/Reglas-esp-2024.pdf"
                                    style={{
                                        textDecoration: 'none',
                                        color: '#153a4b',
                                        fontWeight: 'bold',
                                        alignItems: 'center',
                                        display: 'flex'
                                    }}
                                >
                                    <BookOutlinedIcon sx={{ color: '#153a4b', fontSize: 30 }} />
                                    Reglamento IPF
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Typography sx={{ color: '#153a4b', fontWeight: 'bold', display:'flex', alignItems: 'center' }} onClick={handleClickAtletas}>
                                    <AssignmentIndOutlinedIcon sx={{ color: '#153a4b', fontSize: 30 }} />
                                    Perfiles de Atletas
                                    <ExpandMoreIcon sx={{ color: '#153a4b', fontSize: 30 }} />
                                </Typography>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElAtletas}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    open={openAtletas}
                                    onClose={handleCloseAtletas}
                                >
                                    <MenuItem  onClick={(event) => handleCloseAtletas(event)}>
                                        <Link
                                            to="/atletas-masc"
                                            style={{
                                                textDecoration: 'none',
                                                color: '#153a4b',
                                                fontWeight: 'bold',
                                                alignItems: 'center',
                                                display: 'flex'
                                            }}
                                        >
                                            <ManIcon sx={{ color: '#153a4b', fontSize: 30 }} />
                                            Categoría Masculina
                                        </Link>
                                    </MenuItem>
                                    <MenuItem  onClick={(event) => handleCloseAtletas(event)}>
                                        <Link
                                            to="/atletas-fem"
                                            style={{
                                                textDecoration: 'none',
                                                color: '#153a4b',
                                                fontWeight: 'bold',
                                                alignItems: 'center',
                                                display: 'flex'
                                            }}
                                        >
                                            <WomanIcon sx={{ color: '#153a4b', fontSize: 30 }} />
                                            Categoría Femenina
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </MenuItem>
                        </Menu>
                        <Link to="/" style={{ textDecoration: 'none', color: '#153a4b', padding:10 }}>
                            <img src={logopanamalifters} alt="logo-fpp" style={{ width: '100px' }} />
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </nav>
    );
}
