import ArticleOfTheWeekCard from "./ArticleOfTheWeekCard.jsx";

function ArticlesList({ items }) {
    return (

        <div className="grid-container">

            {items && items.map((item, index) => (
                <div key={index}>
                    <ArticleOfTheWeekCard ArticleID={item} />
                </div>
            ))}
        </div>
    );
}

export default ArticlesList;
