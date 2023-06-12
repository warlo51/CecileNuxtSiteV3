import urlFor from "~/utils/fonctions";
import {Article} from "~/models/Article";
import { defineStore } from 'pinia';
const useArticlesStore = defineStore("articlesStore", () => {
    const articles = ref([]);

    const fetchAllArticles = () => {
        const query = groq`*[_type == "articles"]`;
        const { data } = useSanityQuery(query);
        const listOfArticles = data.value?.map((article: any) => {
            return {
                ...article,
                image: urlFor(article.image).url(),
                fromSanity: true
            }
        }).sort(function (a: any, b: any) {
            return new Date(b._updatedAt) - new Date(a._updatedAt);
        });

        articles.value = listOfArticles?.map((article: any) => new Article(article));
    }

    const fetchThreeLastArticles = async () => {
        return articles.value?.slice(0, 3);
    }
    return {
        fetchAllArticles,
        fetchThreeLastArticles,
        articles
    }
})


export { useArticlesStore }
