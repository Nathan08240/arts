import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];

import Logo from '../../assets/icons/logo-as.png';
import Image from "next/image";

function ResponsiveAppBar() {

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 0,
                zIndex : 1000,
                opacity: 0.9,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image src={Logo} alt="logo" width={50} height={50}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Arts et Services 3D
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}

                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;