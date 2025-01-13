
import DepartmentSort from "./DepartmentSort.jsx";
import HighlightFilter from "./HighlightFilter.jsx"; // Import HighlightFilter

function AdvancedSearchBar({
                       artistFilter, setArtistFilter,
                       departmentFilter, setDepartmentFilter,
                       highlightFilter, setHighlightFilter,
                       galleryNumberFilter, setGalleryNumberFilter,
                       searchName, setSearchName,
                       setCurrentPage
                   }) {
    return (
        <div id="sortBar">
            <input
                type="text"
                placeholder="Artist"
                value={artistFilter}
                onChange={(e) => {
                    setArtistFilter(e.target.value);
                    setCurrentPage(1);
                }}
            />
            <DepartmentSort
                onDepartmentSelect={(selectedDepartment) => {
                    setDepartmentFilter(selectedDepartment);
                    setCurrentPage(1);
                }}
            />
            <input
                type="text"
                placeholder="Gallery Number"
                value={galleryNumberFilter}
                onChange={(e) => {
                    setGalleryNumberFilter(e.target.value);
                    setCurrentPage(1);
                }}
            />
            <HighlightFilter
                highlightFilter={highlightFilter}
                setHighlightFilter={setHighlightFilter}
                setCurrentPage={setCurrentPage}
            />
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchName}
                    onChange={(e) => {
                        setSearchName(e.target.value);
                        setCurrentPage(1);
                    }}
                />
            </div>
        </div>
    );
}

export default AdvancedSearchBar;
