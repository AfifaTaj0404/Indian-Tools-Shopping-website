import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">


      <div className="hero-image">
        <img src="/tools1.png" alt="Indian Tools Banner" />
      </div>


      <div className="home-content">
        <h1>Indian Tools</h1>
        <p>
          Your trusted destination for high-quality industrial and construction tools.
        </p>


        <button
          className="explore-btn"
          onClick={() => navigate("/products")}
        >
          Explore Products
        </button>

      </div>
    </div>
  );
}

export default Home;







