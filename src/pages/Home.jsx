
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bosh sahifa</h1>
      <p>JSONPlaceholder API loyihasiga xush kelibsiz!</p>

      <Link to="/todos">
        <button>200 ta Todoni ko'rish</button>
      </Link>
    </div>
  );
}

export default Home;
