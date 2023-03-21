import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 100%;
  margin-bottom: 1rem;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
`;


export const ProductCard = ({ product, onClick }) => {



    return (
        <StyledCard onClick={() => onClick(product)}>
            <CardActionArea>
                <CardMedia component="img" height="240" image={`https://directus.nbrcs.pro/assets/${product.image}`} alt={product.name} />
                <CardContent>

                    <Typography gutterBottom variant="h6" component="div">
                        {product.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {product.price} €
                    </Typography>
                </CardContent>
            </CardActionArea>
        </StyledCard>
    );
};

