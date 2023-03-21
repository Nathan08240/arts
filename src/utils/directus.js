import { Directus } from '@directus/sdk';
import axios from 'axios';

const directus = new Directus('https://directus.nbrcs.pro/');

const API_BASE_URL = 'https://directus.nbrcs.pro/'; // Remplacez par l'URL de base de votre instance Directus
const PROJECT_NAME = 'articles';

const apiClient = axios.create({
    baseURL: `${API_BASE_URL}`,
});


export const fetchArticles = async () => {
    try {
        const response = await apiClient.get(`/items/${PROJECT_NAME}`);
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        console.error('Failed to fetch articles:', error);
        return null;
    }
};

export const getCategory = (category) => {
    switch (category) {
        case 'kit':
            return 'En Kit';
        case 'unpainted':
            return 'Non peinte';
        default:
            return 'Peinte';
    }
};


export default directus;