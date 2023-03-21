import React from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import {ProductCard} from "@/components/ProductCard";

const ProductGridContainer = styled(Grid)`
  padding: 1rem;
`;

const ProductGrid = ({ products, onProductClick }) => {
    return (
        <ProductGridContainer container spacing={2}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product.id}>
                    <ProductCard product={product} onClick={onProductClick} />
                </Grid>
            ))}
        </ProductGridContainer>
    );
};

export default ProductGrid;
