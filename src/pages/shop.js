import ShopPage from '../components/ShopPage';
import {fetchArticles} from "@/utils/directus";

export const getServerSideProps = async () => {
    const products = await fetchArticles();

    return {
        props: {
            products
        },
    };
};

export default function shop ({ products }) {
    return <ShopPage products={products} />;
};

