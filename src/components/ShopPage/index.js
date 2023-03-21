import {getCategory} from "@/utils/directus";
import {useState} from "react";
import ProductGrid from '@/components/ProductGrid';
import {
    AppBar,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Toolbar,
    Typography,
} from '@mui/material';
import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";

const ShopPage = ({products}) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleClose = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            <Head>
                <title>Arts et Services 3D Shop</title>
                <meta name="description" content="Boutique de figurines 3D"/>
            </Head>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Link href="/">Arts et Services 3D Shop</Link>
                    </Typography>
                    {/* Ici, ajoutez les autres éléments de la navbar si nécessaire */}
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg">
                <div style={{padding: "3rem 0"}}>
                    <Typography variant="h2" align="center">
                        Bienvenue sur notre boutique de figurines 3D !
                    </Typography>
                    <Typography variant="h5" align="center">
                        Découvrez notre large gamme de figurines imprimées en 3D.
                    </Typography>

                </div>


                <ProductGrid products={products} onProductClick={handleProductClick}/>
                <Dialog open={!!selectedProduct} onClose={handleClose}>
                    {selectedProduct && (
                        <>
                            <DialogTitle>{selectedProduct.name}</DialogTitle>
                            <DialogContent>
                                <Image src={`https://directus.nbrcs.pro/assets/${selectedProduct.image}`}
                                       alt={selectedProduct.name}
                                       height={300}
                                       width={300}
                                       style={{
                                           display: "block",
                                           margin: "auto",
                                           objectFit: "contain",
                                       }}
                                />
                                <DialogContentText>
                                    {selectedProduct.description}
                                </DialogContentText>
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
                                <Link href={`/contact?reference=${selectedProduct.reference}`}>
                                    <Button>
                                        Contacter pour ce produit
                                    </Button>
                                </Link>
                                <Button
                                    onClick={handleClose}
                                    autoFocus
                                >Fermer</Button>
                            </DialogActions>
                        </>
                    )}
                </Dialog>

            </Container>
        </div>
    );
};

export default ShopPage;