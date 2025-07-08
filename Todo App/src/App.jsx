import { useRef, useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: 'Đi học thêm' },
    { id: 2, name: 'Đi học võ' },
    { id: 3, name: 'Làm bài' },
  ]);

  const inputRef = useRef();

  console.log({ inputRef });

  // const todoList = [
  //   { id: 1, name: 'Đi học thêm' },
  //   { id: 2, name: 'Đi học võ' },
  //   { id: 3, name: 'Làm bài' },
  // ];

  const todos = todoList.map(todo => {
    return <TodoItem name={todo.name} key={todo.id} />;
  });

  console.log(todos);

  return (
    <div className="container">
      <input
        ref={inputRef}
        type="text"
        name="add-new-task"
        placeholder="Add new task"
        className="task-input"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            const value = e.target.value;
            console.log(value);
            setTodoList([
              ...todoList,
              { id: crypto.randomUUID(), name: value },
            ]);
            inputRef.current.value = '';
          }
        }}
      />
      <div>{todos}</div>
    </div>
  );
}

export default App;
