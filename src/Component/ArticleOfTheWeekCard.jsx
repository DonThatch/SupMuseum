import {useEffect, useState} from "react";
import "../Styles/ArticleOfTheWeekCard.css"
function ArticleOfTheWeekCard({ArticleID}){
    console.log("articleId in Card:"+ArticleID)
    const  [data, setData] = useState({
        primaryImageSmall: "",
        title:"",
        culture: "",
        objectDate: "",
    })
    useEffect(() => {
        const fetchObject = async () =>{
            try {
                const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${ArticleID}`)
                if(!response.ok){
                    return(<div><p>Error Network response was not OK</p></div>)
                }
                const jsonData = await response.json();
                setData(jsonData);
            }catch (error)  {
                return (<div><p>Error :{error}</p></div>)
            }
        }
        fetchObject()
    }, [ArticleID]);

    const handleClick = () => {
        window.location.href = `/article/${ArticleID}`;
    }

    return(
        <div className={"ArticleOfTheWeekCard"} onClick={handleClick}>
            <img src={data.primaryImageSmall? data.primaryImageSmall:"src/assets/imageNotFound.png"} alt={`image of: ${data.title}`}/>
            <h4>{data.title}</h4>
            <p>culture: {data.culture ? data.culture : "Unknown"}</p>
            <p>period: {data.objectDate}</p>
        </div>
    )


}

export default ArticleOfTheWeekCard