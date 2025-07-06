import React from 'react';

const TodoItem = props => {
  console.log(props);
  return (
    <div className="todo-item">
      <p className="todo-item-text">{props.name}</p>
    </div>
  );
};

export default TodoItem;
