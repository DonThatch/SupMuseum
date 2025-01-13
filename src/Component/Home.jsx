import "../Styles/Home.css"
import {useNavigate} from "react-router-dom";

function Home(){
    const navigate = useNavigate();

    return (
        <div className="home">
            <h1>Welcome to the Met</h1>
            <button className="btn from-left" onClick={() => navigate('/about')}>Discover</button>
        </div>

    )
}

export default Home;