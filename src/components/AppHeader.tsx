import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router';


const pages = {
    "Inicio": '/',
    "Productos": '/products',
    "Trabajos": '/works',
    "Sobre Nosotros": '/about',
    "Contacto": '/contact',
    };

    
    function AppHeader() {
    
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <div>
        <AppBar position="fixed" style={{ backgroundColor: "rgba(0, 0, 0, 1)", top: 0, left: 0, maxWidth: '1920px'}}>
        <Container maxWidth="xl" style={{ height: '12vh' }}>
            <Toolbar disableGutters style={{ height: '100%', display: 'flex' }}>
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
                    fontSize: '40px',
                    letterSpacing: '.4rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                VETTA
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
                {Object.entries(pages).map(([page, path]) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Button
                            key={path}
                            onClick={() => navigate(path)}
                            sx={{ my: 2, display: 'block', fontWeight: 500, fontSize: '15px', fontFamily: 'monospace', letterSpacing: '.1rem' }}
                        >
                            {page}
                            </Button>
                    </MenuItem>                
                ))}
                </Menu>
            </Box>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: '40px',
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                VETTA
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: '20px' }}>
            {Object.entries(pages).map(([page, path]) => (
                <Button
                key={path}
                onClick={() => navigate(path)}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: 500, fontSize: '20px', fontFamily: 'monospace', letterSpacing: '.1rem' }}
                >
                {page}
                </Button>
            ))}
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    </div>
  );
}
export default AppHeader;
