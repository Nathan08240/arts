import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from '../../assets/images/herobanner.jpg';
import Image from "next/image";

const StyledBanner = styled(Box)(({ theme }) => ({
    padding: '3rem 0',
    textAlign: 'center',
    color: 'black',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2rem',


    '@media (max-width: 600px)': {
        height: '30vh',
        padding: '1rem 0',
        marginTop: '6rem',
        position: 'relative',

        '& h2': {
            fontSize: '1.5rem',
        },

        '& h5': {
            fontSize: '1rem',
        },
    },

    '& h2': {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 700,
        marginBottom: theme.spacing(2),
    },
    '& h5': {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 300,
    },
}));

const HeroBanner = () => {
    return (
        <StyledBanner>
            <Image src={backgroundImage} alt="background"
                        quality={100}
                    style={{ position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -1,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        filter: 'blur(5px)',
                        opacity: 0.8,

                    }}
            />
            <Typography variant="h2">
                Bienvenue sur notre boutique de figurines 3D !
            </Typography>
            <Typography variant="h5">
                Découvrez notre large gamme de figurines imprimées en 3D.
            </Typography>
        </StyledBanner>
    );
};

export default HeroBanner;
