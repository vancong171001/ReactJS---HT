import PropTypes from 'prop-types';
const TodoItem = props => {
  return (
    <div
      className="todo-item"
      onClick={() => props.handleTodoItemClick(props.id)}
    >
      <div style={{ display: 'flex', gap: '4px' }}>
        <input
          type="checkbox"
          checked={props.isCompleted}
          onChange={() => {
            props.handleCompleteCheckboxChange(props.id);
          }}
          onClick={e => {
            e.stopPropagation();
          }}
        />
        <p className="todo-item-text">{props.name}</p>
      </div>
      {props.isImportant && <p>⭐</p>}
    </div>
  );
};

TodoItem.PropTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  handleTodoItemClick: PropTypes.func,
  handleCompleteCheckboxChange: PropTypes.func,
  isCompleted: PropTypes.bool,
  isImportant: PropTypes.bool,
};

export default TodoItem;
