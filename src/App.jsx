
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Todos from "./pages/Todos";
import TodoDetail from "./pages/TodoDetail";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Bosh sahifa</Link>
        {" | "}
        <Link to="/todos">Todos ro'yxati</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todos/:id" element={<TodoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
