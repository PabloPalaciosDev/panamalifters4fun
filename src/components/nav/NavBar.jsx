import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { Link } from "react-router-dom";
import logofpp from "../../assets/img/logo-fpp.jpg";

export default function NavBar() {
  return (
    <nav>
      <AppBar sx={{ width: "100%", backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <img src={logofpp} alt="logo" width={50} />
              </Link>
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
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
        </Container>
      </AppBar>
    </nav>
  );
}
