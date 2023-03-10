import React from 'react';
import Slider from "react-slick";
import Head from "next/head";
import {CarrouselContainer, Slide} from "@/components/Carrousel/style";
import Image from "next/image";
import ActuBanner from '../../assets/images/bg-printer.jpg'
import SlideImage from  '../../assets/images/slide3.jpg'
import {Speech} from "@/styles/styles";
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
                    <Slide >
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
                            <p>Notre site web propose une large s??lection de figurines, pi??ces d??coratives et pi??ces
                                techniques/m??caniques pour r??parer des petits ??lectrom??nagers et autres objets. Tous nos
                                produits sont fabriqu??s avec soin ?? partir de mat??riaux de haute qualit??. Commandez d??s
                                maintenant pour vous faire plaisir avec nos produits uniques.</p>
                        </Speech>
                        <Speech
                            style={{
                                top: "45%"
                            }}>
                            <p>
                                Pour suivre l'actualit?? de notre site, n'h??sitez pas ?? nous suivre sur les r??seaux, et ??
                                aller voir notre blog pour d??couvrir nos derni??res nouveaut??s.
                            </p>
                        </Speech>
                        <Link to={"https://blog-as.hub.nbrcs.pro"} display={"Nos actualit??s"}/>

                    </Slide>
                    <Slide>
                        <MUI.Grid container>
                            <MUI.Grid item xs={12} sm={4}>
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
                                                Nous proposons des figurines en kit, ?? assembler et peindre.
                                            </MUI.Typography>

                                        </MUI.CardContent>
                                    </MUI.CardActionArea>
                                </MUI.Card>
                            </MUI.Grid>
                            <MUI.Grid item xs={12} sm={4}>
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
                                                Figurines assembl??es
                                            </MUI.Typography>
                                            <MUI.Typography variant="body2" color="text.secondary">
                                                Nous proposons des figurines assembl??es, pr??tes ?? ??tre peintes.
                                            </MUI.Typography>

                                        </MUI.CardContent>
                                    </MUI.CardActionArea>

                                </MUI.Card>
                            </MUI.Grid>
                            <MUI.Grid item xs sm={4}>
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
                                                Nous proposons des figurines peintes, pr??tes ?? ??tre expos??es.
                                            </MUI.Typography>

                                        </MUI.CardContent>
                                    </MUI.CardActionArea>
                                </MUI.Card>
                            </MUI.Grid>
                        </MUI.Grid>
                    </Slide>
                    <Slide>
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
                            <p>Notre site propose ??galement la demander une pi??ce sur mesures, selon votre demande et vos besoin, que ce soit pi??ces m??caniques, figurines ou tout autres genres sur devis</p>
                        </Speech>
                        <Link to={"/"} display={"Nos actualit??s"}/>
                    </Slide>
                </Slider>
            </CarrouselContainer>
        </>
    );
}