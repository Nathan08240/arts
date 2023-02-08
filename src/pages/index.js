import Head from 'next/head'
import Image from "next/image";
import {Actualite, Devis, Figurines, Main, Speech} from "@/styles/styles"
import Link from "@/components/Link";
import HomeCard from "@/components/HomeCard";
import bg from "/src/assets/images/bg-printer.svg";
import logo from "/src/assets/images/logo.png";
import test from "/src/assets/images/test.jpg";



export default function Home() {
    return (
        <>
            <Head>
                <title>Arts et Services 3D</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Main style={{backgroundImage: `url(${bg.src})`}}>
                <Actualite>
                    <div>
                        <Image
                            src={logo.src}
                            alt="logo"
                            width={100}
                            height={100}
                        />
                        <h2>Arts et Services 3D</h2>
                    </div>
                    <Speech>
                        <p>Notre site web propose une large sélection de figurines, pièces décoratives et pièces
                            techniques/mécaniques pour réparer des petits électroménagers et autres objets. Tous nos
                            produits sont fabriqués avec soin à partir de matériaux de haute qualité. Commandez dès
                            maintenant pour vous faire plaisir avec nos produits uniques.</p>
                    </Speech>
                    <Link to={"/actualites"} display={"Voir les actualités"}/>
                </Actualite>
                <Figurines>
                    {/*<h2>*/}
                    {/*    Nos Figurines*/}
                    {/*</h2>*/}
                    <div>
                        <HomeCard title={"En pièce"} description={"Nos pièces vous sont livrées en kit, il vous reste donc à les montées et les peindres"} image={test} landscape={false}/>
                        <HomeCard title={"Montée non peinte"} description={"Nos pièces vous sont livrées montées, il vous reste donc à les peindres"} image={test} landscape={false}/>
                        <HomeCard title={"Montée et peinte"} description={"Nos pièces vous sont livrées en montées et peintes, elles sont prêtes à être exposé"} image={test} landscape={true}/>
                    </div>
                </Figurines>
                <Devis/>
            </Main>
        </>
    )
}
