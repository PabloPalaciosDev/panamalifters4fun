import React from "react";
import { AppBar, Toolbar, IconButton, Button, Container, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { Link } from "react-router-dom";
import logofpp from "../../assets/img/logo-fpp.png";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <nav>
      <AppBar sx={{ width: "100%", backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <HomeOutlinedIcon sx={{ color: "red", fontSize: 35 }} />
              <Button sx={{ color: "black", fontWeight: "bold" }}>
                Inicio
              </Button>
            </Link>
            <Link
              to="/reglamento"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <BookOutlinedIcon sx={{ color: "red", fontSize: 30 }} />
              <Button sx={{ color: "black", fontWeight: "bold" }}>
                Reglamento IPF
              </Button>
            </Link>
            <Link
              to="/records"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <EmojiEventsOutlinedIcon sx={{ color: "red", fontSize: 35 }} />
              <Button sx={{ color: "black", fontWeight: "bold" }}>
                Records Panameños
              </Button>
            </Link>
            <Link
              to="/atletas"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AssignmentIndOutlinedIcon sx={{ color: "red", fontSize: 30 }} />
              <Button sx={{ color: "black", fontWeight: "bold" }}>
                Perfiles de Atletas
              </Button>
            </Link>
            <Link
              to="/calendario"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CalendarMonthOutlinedIcon sx={{ color: "red", fontSize: 30 }} />
              <Button sx={{ color: "black", fontWeight: "bold" }}>
                Calendario
              </Button>
            </Link>
          </Toolbar>
          <Toolbar
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={handleClick}
            >
              <MenuIcon sx={{ color: "red", fontSize: 40 }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/" style={{ textDecoration: "none", color: "black", fontWeight: 'bold', alignItems: 'center', display: 'flex' }}>
                <HomeOutlinedIcon sx={{ color: "red", fontSize: 35 }} />
                  Inicio
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/reglamento"
                  style={{ textDecoration: "none", color: "black", fontWeight: 'bold', alignItems: 'center', display: 'flex' }}
                >
                  <BookOutlinedIcon sx={{ color: "red", fontSize: 30 }} />
                  Reglamento IPF
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/records"
                  style={{ textDecoration: "none", color: "black", fontWeight: 'bold', alignItems: 'center', display: 'flex' }}
                >
                  <EmojiEventsOutlinedIcon sx={{ color: "red", fontSize: 35 }} />
                  Records Panameños
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/atletas"
                  style={{ textDecoration: "none", color: "black", fontWeight: 'bold', alignItems: 'center', display: 'flex'}}
                >
                  <AssignmentIndOutlinedIcon sx={{ color: "red", fontSize: 30 }} />
                  Perfiles de Atletas
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/calendario"
                  style={{ textDecoration: "none", color: "black", fontWeight: 'bold', alignItems: 'center', display: 'flex' }}
                >
                  <CalendarMonthOutlinedIcon sx={{ color: "red", fontSize: 30 }} />
                  Calendario
                </Link>
              </MenuItem>
            </Menu>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <img src={logofpp} alt="logo-fpp" style={{ width: "60px" }} />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
}
