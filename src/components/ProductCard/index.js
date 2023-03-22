import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
                    <CardInfo>
                        <Typography variant="body2" color="text.secondary">
                            {product.price} €
                        </Typography>
                        <Typography variant="button" color="primary">
                            Voir plus
                        </Typography>
                    </CardInfo>
                </CardContent>
            </CardActionArea>
        </StyledCard>
    );
};
