import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const todoList = [
    { id: 1, name: 'Đi học thêm' },
    { id: 2, name: 'Đi học võ' },
    { id: 3, name: 'Làm bài' },
  ];

  const todos = todoList.map(todo => {
    return <TodoItem name={todo.name} key={todo.id} />;
  });

  console.log(todos);
  return (
    <div className="container">
      <input
        type="text"
        name="add-new-task"
        placeholder="Add new task"
        className="task-input"
      />
      <div>{todos}</div>
    </div>
  );
}

export default App;
