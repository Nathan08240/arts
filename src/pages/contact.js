import {useRouter} from 'next/router';
import {useEffect, useRef, useState} from 'react';
import {TextField, Button, Grid, Container, Box, Typography} from '@mui/material';
import {directus} from "@/utils/directus";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const router = useRouter();
    const {reference} = router.query;
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (reference) {
            directus.items('articles').readByQuery({
                filter: {
                    reference: {
                        _eq: reference
                    }
                }
            }).then((response) => {
                setProduct(response.data[0]);
            });
            console.log(product)
        }
    }, [reference]);


    const [formData, setFormData] = useState({});
    const form = useRef();
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICEID, process.env.NEXT_PUBLIC_TEMPLATEID, e.target, process.env.NEXT_PUBLIC_PUBLICKEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Container>
            <Box sx={{marginTop: 4}}>
                <Typography variant="h4" align="center">
                    Contactez le vendeur à propos de la figurine
                </Typography>
                <Box sx={{marginTop: 4}}>
                    <Typography variant="h5" align="center">
                        {product.name}
                    </Typography>
                    <Typography variant="h6" align="center">
                        {product.price} €
                    </Typography>
                    <Typography variant="body1" align="center">
                        {product.description}
                    </Typography>
                </Box>

                <form onSubmit={sendEmail} ref={form}>
                    <Grid container spacing={2} sx={{marginTop: 4}}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="name"
                                id="name"
                                label="Nom"
                                variant="outlined"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="email"
                                id="email"
                                label="Email"
                                type="email"
                                variant="outlined"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="message"
                                id="message"
                                label="Message"
                                multiline
                                rows={4}
                                variant="outlined"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" fullWidth>
                                Envoyer
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Link href={'/shop'}
                      passHref>
                    <Button variant="contained" fullWidth sx={{marginTop: 4}}>
                        Retour à la boutique
                    </Button>
                </Link>

            </Box>
        </Container>
    );
};

export default ContactForm;
