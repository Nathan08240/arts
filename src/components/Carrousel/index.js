import React from 'react';
import Slider from "react-slick";
import Head from "next/head";
import {CarrouselContainer, Slide, SpeechContainer} from "@/components/Carrousel/style";
import Image from "next/image";
import ActuBanner from '../../assets/images/bg-printer.jpg'
import SlideImage from '../../assets/images/slide3.jpg'
import {Speech} from "./style";
import Link from "@/components/Link";
import * as MUI from "@mui/material"

export default function Carrousel() {

    const NextArrow = ({className, style, onClick}) => {
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "50%",
                    right: "5%",
                    zIndex: 1,
                }}
                onClick={onClick}
            />
        );
    }

    const PrevArrow = ({className, style, onClick}) => {
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "50%",
                    left: "5%",
                    zIndex: 1,
                }}
                onClick={onClick}
            />
        );
    }


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 10000,
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };

    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" charSet="UTF-8"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            </Head>
            <CarrouselContainer>
                <Slider {...settings}>
                    <Slide>
                        <MUI.Grid container>
                            <MUI.Grid item xs={12} sm={4} className={'visible'}>
                                <MUI.Card
                                    sx={{
                                        borderRadius: "0",
                                        height: "100vh",
                                    }}
                                >
                                    <MUI.CardActionArea>
                                        <MUI.CardMedia
                                            component="img"
                                            alt="Figurines en kit"
                                            height="140"
                                            title="Figurines en kit"
                                            image="https://www.fabbaloo.com/wp-content/uploads/2020/05/image-asset_img_5eb097069d2ee.jpg"
                                            sx={{
                                                height: "80vh",
                                            }}
                                        />
                                        <MUI.CardContent
                                            sx={{
                                                height: "20vh",
                                            }}>
                                            <MUI.Typography gutterBottom variant="h5" component="div">
                                                Figurines en kit
                                            </MUI.Typography>
                                            <MUI.Typography variant="body2" color="text.secondary">
                                                Nous proposons des figurines en kit, à assembler et peindre.
                                            </MUI.Typography>

                                        </MUI.CardContent>
                                    </MUI.CardActionArea>
                                </MUI.Card>
                            </MUI.Grid>
                            <MUI.Grid item xs={12} sm={4} className={'visible'}>
                                <MUI.Card
                                    sx={{
                                        height: "100vh",
                                        borderRadius: "0",
                                    }}
                                >
                                    <MUI.CardActionArea>
                                        <MUI.CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image="https://formlabs-media.formlabs.com/filer_public_thumbnails/filer_public/85/80/8580725b-d9e2-45a2-8d10-77073e3ad3b9/asc-hulk.jpg__1184x0_q85_subsampling-2.jpg"
                                            title="Contemplative Reptile"
                                            sx={{
                                                height: "80vh",
                                            }}
                                        />
                                        <MUI.CardContent
                                            sx={{
                                                height: "20vh",
                                            }}>
                                            <MUI.Typography gutterBottom variant="h5" component="div">
                                                Figurines assemblées
                                            </MUI.Typography>
                                            <MUI.Typography variant="body2" color="text.secondary">
                                                Nous proposons des figurines assemblées, prêtes à être peintes.
                                            </MUI.Typography>

                                        </MUI.CardContent>
                                    </MUI.CardActionArea>

                                </MUI.Card>
                            </MUI.Grid>
                            <MUI.Grid item xs sm={4} className={'visible'}>
                                <MUI.Card
                                    sx={{
                                        height: "100vh",
                                        borderRadius: "0",
                                    }}
                                >
                                    <MUI.CardActionArea>
                                        <MUI.CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image="https://cdn3.trictrac.net/documents/formats/enlargement/documents/originals/d6/28/d4810fca8c51c5defb2eea4405fcdaad3c82ad0b9a515f8459182906ef16.jpeg"
                                            title="Contemplative Reptile"
                                            sx={{
                                                height: "80vh",
                                            }}
                                        />
                                        <MUI.CardContent
                                            sx={{
                                                height: "20vh",
                                            }}>
                                            <MUI.Typography gutterBottom variant="h5" component="div">
                                                Figurines peintes
                                            </MUI.Typography>
                                            <MUI.Typography variant="body2" color="text.secondary">
                                                Nous proposons des figurines peintes, prêtes à être exposées.
                                            </MUI.Typography>

                                        </MUI.CardContent>
                                    </MUI.CardActionArea>
                                </MUI.Card>
                            </MUI.Grid>
                            <MUI.Grid item className={'hidden'}>
                                <MUI.Card
                                    sx={{
                                        height: "100vh",
                                        width: "100vw",
                                        borderRadius: "0",
                                    }}
                                >
                                    <MUI.CardActionArea>
                                        <MUI.CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image="https://cdn3.trictrac.net/documents/formats/enlargement/documents/originals/d6/28/d4810fca8c51c5defb2eea4405fcdaad3c82ad0b9a515f8459182906ef16.jpeg"
                                            title="Contemplative Reptile"
                                            sx={{
                                                height: "80vh",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                            }}
                                        />
                                        <MUI.CardContent
                                            sx={{
                                                height: "20vh",
                                            }}>
                                            <MUI.Typography gutterBottom variant="h5" component="div">
                                                Voir le shop
                                            </MUI.Typography>
                                            <MUI.Typography variant="body2" color="text.secondary">
                                                Nous proposons des figurines disponibles à l'achat dans différents
                                                formats. Cliquer ici pour accéder au shop.
                                            </MUI.Typography>

                                        </MUI.CardContent>
                                    </MUI.CardActionArea>
                                </MUI.Card>
                            </MUI.Grid>
                        </MUI.Grid>
                    </Slide>
                    <Slide>
                        <SpeechContainer>
                            <Image
                                src={ActuBanner}
                                alt="bg"
                                style={{
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "100%",
                                    zIndex: -1,
                                    filter: "brightness(0.2)",
                                }}
                                fill={true}
                            />
                            <Speech>
                                <p>Notre site web propose une large sélection de figurines, pièces décoratives et pièces
                                    techniques/mécaniques pour réparer des petits électroménagers et autres objets. Tous
                                    nos
                                    produits sont fabriqués avec soin à partir de matériaux de haute qualité. Commandez
                                    dès
                                    maintenant pour vous faire plaisir avec nos produits uniques.</p>
                            </Speech>
                            <Speech
                                style={{
                                    top: "45%"
                                }}>
                                <p>Pour suivre l'actualité de notre site, n'hésitez pas à nous suivre sur les réseaux,
                                    et à
                                    aller voir notre blog pour découvrir nos dernières nouveautés.</p>
                            </Speech>
                            <Link to={"https://blog-as.hub.nbrcs.pro"} display={"Nos actualités"}/>
                        </SpeechContainer>
                    </Slide>
                    <Slide>
                        <SpeechContainer>

                            <Image
                                src={SlideImage}
                                alt="bg"
                                style={{
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "100%",
                                    zIndex: -1,
                                    filter: "brightness(0.2)",
                                }}
                                fill={true}
                            />
                            <Speech>
                                <p>Notre site propose également la demander une pièce sur mesures, selon votre demande
                                    et
                                    vos besoin, que ce soit pièces mécaniques, figurines ou tout autres genres sur
                                    devis</p>
                            </Speech>
                            <Link to={"/"} display={"Demander un devis"}/>
                        </SpeechContainer>

                    </Slide>
                </Slider>
            </CarrouselContainer>
        </>
    );
}