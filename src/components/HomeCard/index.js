import React from 'react';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
        width: props => props.landscape ? "100%" : "50%",
        margin: 'auto',
        minHeight: 300,
        padding: 20,
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
    },
    media: {
        height: props => props.landscape ? 140 : 300,
    },
});

export default function HomeCard({title, description, image, ...props}) {
    const {root, media} = useStyles(props);

    return (
        <Card className={root}>
            <CardMedia
                className={media}
                image={image.src}
                title="Contemplative Reptile"
            />
            <CardContent style={{backgroundColor:"#fff"}}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}