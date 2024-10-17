import { Hono } from 'hono'
import { cors } from 'hono/cors'
import todos from "../src/todos"
const app = new Hono()
app.use('*', cors());

app.get('/', (c) => {
  let randomTodos = []
  console.log("hic");
  for (let i = 0; i < todos.length; i++) {
    if (Math.random() > 0.5) {
      randomTodos.push(todos[i]);
    }
  }
  return c.json({
    todos: randomTodos,
  });
})

export default app
