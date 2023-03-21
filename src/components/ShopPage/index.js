import directus, {getCategory} from "@/utils/directus";
import {useEffect, useState} from "react";
import ProductGrid from '@/components/ProductGrid';
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@mui/material';

const ShopPage = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleClose = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            <ProductGrid products={products} onProductClick={handleProductClick} />
            <Dialog open={!!selectedProduct} onClose={handleClose}>
                {selectedProduct && (
                    <>
                        <DialogTitle>{selectedProduct.name}</DialogTitle>
                        <DialogContent>
                            <img src={`https://directus.nbrcs.pro/assets/${selectedProduct.image}`} alt={selectedProduct.name} style={{ width: '100%' }} />
                            <DialogContentText>
                                Prix : {selectedProduct.price} €
                            </DialogContentText>
                            <DialogContentText>
                                Catégorie : {getCategory(selectedProduct.category)}
                            </DialogContentText>
                            <DialogContentText>
                                Quantité : {selectedProduct.quantity}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Fermer</Button>
                            {/* Ajoutez un bouton pour ajouter le produit au panier, si nécessaire */}
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </div>
    );
};

export default ShopPage;