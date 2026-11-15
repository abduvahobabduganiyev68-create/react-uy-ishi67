
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=200")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Xatolik:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Yuklanmoqda...</h2>;
  }

  return (
    <div>
      <h1>Todos ro'yxati</h1>

      <h3>Jami: {todos.length} ta Todo</h3>

      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>
            {todo.id}. {todo.title}
          </h3>

          <p>
            Holati: {todo.completed ? "Bajarilgan" : "Bajarilmagan"}
          </p>

          <Link to={`/todos/${todo.id}`}>
            Batafsil ko'rish
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Todos;
