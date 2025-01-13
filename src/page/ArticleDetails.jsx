import { useEffect, useState } from 'react';
import '../Styles/ArticleDetails.css';
import Header from '../Component/Header.jsx';
import Footer from '../Component/Footer.jsx';
import { useParams } from 'react-router-dom';

const ArticleDetails = () => {
    const { articleID } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        console.log('articleID:', articleID);
        if (articleID) {
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${articleID}`)
                .then(response => response.json())
                .then(data => setArticle(data))

        }
    }, [articleID]);

    if (!article) return <div>Loading...</div>;

    return (
        <>
            <Header />
                <div className={"articleContainer"}>
                    <div className={"articleContent"}>

                        <div className={"textContent"}>
                            <h1>{article.title}</h1>

                            <h4>Title: </h4>
                            <p>{article.title}</p>

                            <h4>Artist: </h4>
                            <p>{article.artistDisplayName ? article.artistDisplayName : "Unknown"}</p>

                            <h4>Date: </h4>
                            <p>{article.objectDate ? article.objectDate : "Unknown"}</p>

                            <h4>Culture: </h4>
                            <p>{article.culture ? article.culture : "Unknown"}</p>

                            <h4>Department: </h4>
                            <p>{article.department ? article.department : "Unknown"}</p>

                            <h4>Medium: </h4>
                            <p>{article.medium ? article.medium : "Unknown"}</p>

                            <h4>Dimensions: </h4>
                            <p>{article.dimensions ? article.dimensions : "Unknown"}</p>

                        </div>

                        <div className={"imageContainer"}>
                            <img src={article.primaryImageSmall} alt={`image of: ${article.title}`}/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    );
};

export default ArticleDetails;
