import TodoItem from './todoItem';

export default function TodoList({ todos }) {
  const todoItems = todos.map(todo => {
    return <TodoItem title={todo.title} desc={todo.desc} key={todo.title} />
  })

  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {todoItems}
    </div>
  );
}