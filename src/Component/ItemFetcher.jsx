import { useEffect, useState } from "react";

function ItemFetcher({
                         artistFilter,
                         departmentFilter,
                         highlightFilter,
                         currentPage,
                         itemsPerPage,
                         setItems,
                         galleryNumberFilter,
                         setGalleryNumberFilter,
                         searchName,
                         setSearchName,
                         setTotalItems,
                         setLoading
                     }) {
    const [fetchedObjectIDs, setFetchedObjectIDs] = useState([]);
    const [lastFetchedPage, setLastFetchedPage] = useState(1);
    
    useEffect(() => {
        const fetchObjects = async (page, reset = false) => {
            setLoading(true);
            try {
                const queryParms = []
                if (artistFilter && artistFilter.length > 3){
                    queryParms.push(`artistOrCulture=true`);
                }

                if (departmentFilter) {
                    queryParms.push(`departmentId=${departmentFilter}`);
                }

                if (highlightFilter) {
                    queryParms.push(`isHighlight=true`);
                }

                if (galleryNumberFilter) {
                    queryParms.push(`galleryNumber=${galleryNumberFilter}`);
                }

                if (searchName  && searchName.length >= 3 || artistFilter && artistFilter.length > 3) {
                    queryParms.push(`q=${artistFilter ||searchName }`);
                    
                }

                if(queryParms.length === 0) {
                    return
                }

                if (!searchName && !artistFilter){
                    queryParms.push(`q=""`);
                }
                const query = queryParms.join('&')
                const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?${query}`;

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Network response was not OK: ${response.status}`);
                }
                const jsonData = await response.json();

                if (!jsonData.objectIDs || jsonData.objectIDs.length === 0) {
                    setItems([]);
                    setLoading(false);
                    return;
                }
                setItems(jsonData)

                const startIndex = reset ? 0 : fetchedObjectIDs.length;
                const objectIDs = jsonData.objectIDs.slice(startIndex);

                const items = [];
                let currentIndex = startIndex;

                while (items.length < itemsPerPage && currentIndex < objectIDs.length) {
                    items.push(objectIDs[currentIndex]);
                    currentIndex++;
                }
                setFetchedObjectIDs(objectIDs.slice(0, currentIndex));
                setItems(items);
                setLoading(false);
                setLastFetchedPage(page);
            } catch (error) {

                setLoading(false);
            }
        };

        fetchObjects(currentPage, currentPage === 1);
    }, [currentPage, artistFilter, departmentFilter, highlightFilter, itemsPerPage, setItems, setLoading, galleryNumberFilter, searchName, fetchedObjectIDs.length]);

    useEffect(() => {
        setFetchedObjectIDs([]);
        setLastFetchedPage(1);
    }, [artistFilter, departmentFilter, highlightFilter, galleryNumberFilter, searchName]);

    return null;
}

export default ItemFetcher;
