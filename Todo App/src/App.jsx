import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="container">
      <input
        type="text"
        name="add-new-task"
        placeholder="Add new task"
        className="task-input"
      />
      <TodoItem name="Đi học thêm" />
      <TodoItem name="Đi học võ" />
      <TodoItem name="Làm bài" />
    </div>
  );
}

export default App;
