
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function TodoDetail() {
  const { id } = useParams();

  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, [id]);

  if (!todo) {
    return <h2>Yuklanmoqda...</h2>;
  }

  return (
    <div>
      <h1>Todo ma'lumotlari</h1>

      <h2>ID: {todo.id}</h2>
      <h3>{todo.title}</h3>

      <p>User ID: {todo.userId}</p>

      <p>
        Holati: {todo.completed ? "Bajarilgan" : "Bajarilmagan"}
      </p>

      <Link to="/todos">Orqaga qaytish</Link>
    </div>
  );
}

export default TodoDetail;
