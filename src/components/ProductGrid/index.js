import React, { useState } from 'react';
import {
    Button,
    Grid,
    InputAdornment,
    TextField,
    Menu,
    MenuItem,
    FormControlLabel,
    Checkbox,
} from '@mui/material';
import styled from 'styled-components';
import { ProductCard } from '@/components/ProductCard';
import { Search } from '@mui/icons-material';

const ProductGridContainer = styled(Grid)`
  margin-top: 1rem;
  padding: 1rem;
`;

const ProductGrid = ({ products, onProductClick }) => {
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState({ kit: false, unpainted: false, painted: false });
    const [anchorEl, setAnchorEl] = useState(null);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleFilterMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleFilterMenuClose = () => {
        setAnchorEl(null);
    };

    const handleFilterChange = (event) => {
        setFilters({ ...filters, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <Grid container spacing={2} justifyContent="space-between">
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        label="Rechercher"
                        value={search}
                        onChange={handleSearch}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleFilterMenuOpen}
                        aria-controls="filter-menu"
                        aria-haspopup="true"
                    >
                        Filtrer les produits
                    </Button>
                    <Menu
                        id="filter-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleFilterMenuClose}
                    >
                        <MenuItem>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={filters.kit}
                                        onChange={handleFilterChange}
                                        name="kit"
                                    />
                                }
                                label="En Kit"
                            />
                        </MenuItem>
                        <MenuItem>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={filters.unpainted}
                                        onChange={handleFilterChange}
                                        name="unpainted"
                                    />
                                }
                                label="Non Peinte"
                            />
                        </MenuItem>
                        <MenuItem>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={filters.painted}
                                        onChange={handleFilterChange}
                                        name="painted"
                                    />
                                }
                                label="Peinte"
                            />
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
            <ProductGridContainer container spacing={2}>
                <Grid container spacing={3}>
                    {products
                        .filter((product) => {
                            if (
                                (filters.kit || filters.unpainted || filters.painted) &&
                                !filters[product.category]
                            ) {
                                return false;
                            }

                            if (
                                search &&
                                !product.name.toLowerCase().includes(search.toLowerCase())
                            ) {
                                return false;
                            }

                            return true;
                        })
                        .map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <ProductCard product={product} onClick={onProductClick} />
                            </Grid>
                        ))}
                </Grid>
            </ProductGridContainer>
        </>
    );
};

export default ProductGrid;