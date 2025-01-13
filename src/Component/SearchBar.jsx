import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Styles/SearchBar.css";
import {useRef, useState} from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef(null);


    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`);
            const data = await response.json();
            const { objectIDs } = data;

            if (objectIDs && objectIDs.length > 0) {
                const detailsPromises = objectIDs.slice(0, 10).map((id) =>
                    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
                );

                const detailsResponses = await Promise.all(detailsPromises);
                const itemsPromises = detailsResponses.map((res) => res.json());
                const items = await Promise.all(itemsPromises);
                setResults(items);
                setShowResults(false);
            } else {
                setResults([]);
                setShowResults(false);
            }
        } catch (error) {

            setResults([]);
            setShowResults(false);
        }
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleFocus = () => {
        if (results.length > 0) {
            setShowResults(true);
        }
    };

    const handleBlur = (e) => {
        if (!searchRef.current.contains(e.relatedTarget)) {
            setShowResults(false);
        }
    };

    return (
        <div className="search-container" ref={searchRef} onBlur={handleBlur}>
            <form onSubmit={handleSearch} className="box" onFocus={handleFocus}>
                <input
                    type="text"
                    className="input"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search"
                />
                <i className="fas fa-search"><FontAwesomeIcon icon={faSearch}/></i>
            </form>
            {showResults && results.length > 0 && (
                <ul className="results-dropdown">
                    {results.map((item) => (
                        <li key={item.objectID}>
                            <Link to={`/article/${item.objectID}`}>
                                <h3>{item.title}</h3>
                                <p>{item.artistDisplayName}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
)
    ;
};

export default SearchBar;
