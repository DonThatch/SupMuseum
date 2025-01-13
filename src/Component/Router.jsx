import { Routes, Route } from "react-router-dom";
import App from "../App.jsx";
import SearchPage from "../page/search_page.jsx";
import ArticleDetails from "../page/ArticleDetails.jsx";
import AboutUs from "../page/AboutUs.jsx";
import ContactPage from "../page/ContactPage.jsx";
import NotFoundPage from "../page/NotFoundPage.jsx";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path={"/advanced_search"} element={<SearchPage/>}/>
            <Route path="/article/:articleID" element={<ArticleDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default Router;
