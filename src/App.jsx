import './App.css'
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";
import ArticleOfTheWeek from "./Component/ArticleOfTheWeek.jsx";
import Home from "./Component/Home.jsx";

function App() {

  return (
    <>
        <Header/>
        <div>
            <Home/>
            <ArticleOfTheWeek/>
        </div>
        <Footer/>
    </>
  )
}

export default App
