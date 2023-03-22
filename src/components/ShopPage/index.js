import ProductGrid from '@/components/ProductGrid';
import {AppBar, Container, Toolbar, Typography,} from '@mui/material';
import Head from 'next/head'
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import {useRouter} from "next/router";

const ShopPage = ({products}) => {
    const router = useRouter();

    const handleProductClick = (product) => {
        router.push(`/product/${product.id}`);
    };

    return (
        <div>
            <Head>
                <title>Arts et Services 3D Shop</title>
                <meta name="description" content="Boutique de figurines 3D"/>
            </Head>
            <Container maxWidth="lg">
                <HeroBanner/>
                <ProductGrid products={products} onProductClick={handleProductClick}/>
            </Container>
        </div>
    );
};

export default ShopPage;