import '../Styles/searchPage.css';
import { useState } from "react";
import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";
import ArticlesList from "../Component/ArticleList.jsx";
import Pagination from "../Component/Pagination.jsx";
import ItemFetcher from "../Component/ItemFetcher.jsx";
import AdvancedSearchBar from "../Component/AdvancedSearchBar.jsx";

function SearchPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [artistFilter, setArtistFilter] = useState("");
    const [departmentFilter, setDepartmentFilter] = useState("");
    const [highlightFilter, setHighlightFilter] = useState(false);
    const [galleryNumberFilter, setGalleryNumberFilter] = useState("");
    const [searchName, setSearchName] = useState("");
    const itemsPerPage = 20;
    const [totalItems, setTotalItems] = useState(0);

    return (
        <>
            <Header />
            <AdvancedSearchBar
                artistFilter={artistFilter}
                setArtistFilter={setArtistFilter}
                departmentFilter={departmentFilter}
                setDepartmentFilter={setDepartmentFilter}
                highlightFilter={highlightFilter}
                setHighlightFilter={setHighlightFilter}
                galleryNumberFilter={galleryNumberFilter}
                setGalleryNumberFilter={setGalleryNumberFilter}
                searchName={searchName}
                setSearchName={setSearchName}
                setCurrentPage={setCurrentPage}
            />
            <div id="Articles">
                <ItemFetcher
                    artistFilter={artistFilter}
                    departmentFilter={departmentFilter}
                    highlightFilter={highlightFilter}
                    galleryNumberFilter={galleryNumberFilter}
                    searchName={searchName}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    setItems={setItems}
                    setTotalItems={setTotalItems}
                    setLoading={setLoading}
                />
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <ArticlesList items={items} />
                        <Pagination
                            currentPage={currentPage}
                            itemsPerPage={itemsPerPage}
                            totalItems={totalItems}
                            handleNextPage={() => setCurrentPage(prevPage => prevPage + 1)}
                            handlePreviousPage={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                        />
                    </>
                )}
            </div>
            <Footer />
        </>
    );
}

export default SearchPage;
