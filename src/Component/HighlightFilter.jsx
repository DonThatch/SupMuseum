function HighlightFilter({ highlightFilter, setHighlightFilter, setCurrentPage }) {
    const handleCheckboxChange = (event) => {
        setHighlightFilter(event.target.checked);
        setCurrentPage(1);
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={highlightFilter}
                    onChange={handleCheckboxChange}
                />
                Highlighted
            </label>
        </div>
    );
}

export default HighlightFilter;
