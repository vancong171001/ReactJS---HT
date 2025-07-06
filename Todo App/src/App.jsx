import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div>
      <input type="text" name="add-new-task" placeholder="Add new task" />
      <TodoItem />
      <div>
        <p>Đi học thêm</p>
      </div>
      <div>
        <p>Học võ</p>
      </div>
      <div>
        <p>Học bài</p>
      </div>
      <div>
        <p>Đi chợ</p>
      </div>
    </div>
  );
}

export default App;
