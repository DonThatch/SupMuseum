import { useEffect, useState } from "react";
import ArticleOfTheWeekCard from "./ArticleOfTheWeekCard.jsx";

function ArticleOfTheWeek() {
    const [data, setData] = useState({
        total: 0,
        objectIDs: [],
    });
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchObjectId = async () => {
            try {
                const response = await fetch(
                    "https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=\"\""
                );
                if (!response.ok) {
                    throw new Error("Network response was not OK");
                }
                const jsonData = await response.json();
                setData(jsonData);


                const filteredArticles = await filterArticlesWithImages(jsonData.objectIDs);
                setArticles(filteredArticles);
                setLoading(false);
            } catch (error) {

                setLoading(false);
            }
        };

        fetchObjectId();
    }, []);

    const hasImage = async (objectID) => {
        try {
            const response = await fetch(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
            );
            const json = await response.json();
            return json.primaryImageSmall !== "";
        } catch (error) {

            return false;
        }
    };

    const filterArticlesWithImages = async (objectIDs) => {
        const articlesWithImages = [];
        const shuffledObjectIDs = objectIDs.sort(() => 0.5 - Math.random());

        for (let i = 0; i < shuffledObjectIDs.length; i++) {
            const objectID = shuffledObjectIDs[i];
            if (await hasImage(objectID)) {
                articlesWithImages.push(objectID);
                if (articlesWithImages.length === 5) break;
            }
        }
        return articlesWithImages;
    };

    const displayArticleOfTheWeek = () => {
        return articles.map((articleID, index) => (
            <div key={index}>
                <ArticleOfTheWeekCard ArticleID={articleID} />
            </div>
        ));
    };

    return (
        <>
            <h2>Article of the week:</h2>
            <div id="ArticleOfTheWeek">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    displayArticleOfTheWeek()
                )}
            </div>
        </>
    );
}

export default ArticleOfTheWeek;
