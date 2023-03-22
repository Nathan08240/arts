import { getProductById, getCategory } from "@/utils/directus";
import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    Paper,
    Divider,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const ProductPage = ({ product }) => {
    const router = useRouter();

    if (!product) {
        return <div>Chargement...</div>;
    }

    const handleBackClick = () => {
        router.back();
    };

    return (
        <Container maxWidth="lg">
            <Box mt={12} mb={4}>
                <Button variant="outlined" onClick={handleBackClick}>
                    Retour
                </Button>
            </Box>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: { xs: "50vh", md: "60vh" },
                                position: "relative",
                                padding: "2rem",
                                backgroundColor: "rgba(227, 242, 253, 0.5)",
                                borderRadius: "1rem",
                            }}
                        >
                            <Image
                                src={`https://directus.nbrcs.pro/assets/${product.image}`}
                                alt={product.name}
                                fill
                                style={{
                                    objectFit: "contain",
                                    objectPosition: "center",
                                }}
                            />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            minHeight: { xs: "50vh", md: "60vh" },
                            backgroundColor: "rgba(227, 242, 253, 0.5)",
                            borderRadius: "1rem",
                        }}
                    >
                        <CardContent>
                            <Typography variant="h4" component="h1" gutterBottom>
                                {product.name}
                            </Typography>
                            <Divider />
                            <Box mt={2} mb={2}>
                                <Typography variant="subtitle1" gutterBottom>
                                    Catégorie: {getCategory(product.category)}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Quantité: {product.quantity}
                                </Typography>
                            </Box>
                            <Divider />
                            <Box mt={2} mb={2}>
                                <Typography variant="h6" gutterBottom>
                                    Prix: {product.price} €
                                </Typography>
                            </Box>
                            <Divider />
                        </CardContent>
                        <Box p={2}>
                            <Link href={`/contact?reference=${product.reference}`}>
                                <Button variant="contained" color="primary" fullWidth>
                                    Contacter le vendeur
                                </Button>
                            </Link>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Paper
                        elevation={3}
                        sx={{
                            backgroundColor: "rgba(227, 242, 253, 0.5)",
                            borderRadius: "1rem",
                        }}
                    >
                        <Box p={4} marginBottom={4}>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Description du produit
                            </Typography>
                            <Divider />
                            <Box mt={2}>
                                <Typography>{product.description}</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export async function getServerSideProps(context) {
    const productId = context.params.id;
    const product = await getProductById(productId);

    return {
        props: {
            product,
        },
    };
}

export default ProductPage;

