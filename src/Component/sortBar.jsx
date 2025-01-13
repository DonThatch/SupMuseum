
import DepartmentSort from "./DepartmentSort.jsx";
import HighlightFilter from "./HighlightFilter.jsx"; // Nouvel import

function SortBar({ artistFilter, setArtistFilter, departmentFilter, setDepartmentFilter, highlightFilter, setHighlightFilter, setCurrentPage }) {
    return (
        <div id="sortBar">
            <SortBar />
            <input
                type="text"
                placeholder="Filter by artist"
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
            <HighlightFilter
                highlightFilter={highlightFilter}
                setHighlightFilter={setHighlightFilter}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default SortBar;
