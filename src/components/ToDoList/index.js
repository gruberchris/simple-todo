import React from 'react';
import PropTypes from 'prop-types';

import ToDo from '../ToDo';

const ToDoList = ({ todos, removeTodo }) => {
  const todoNode = todos.map(todo => (
    <ToDo key={todo.id} todo={todo} removeTodo={removeTodo} />
  ));

  return (
    <ul>{todoNode}</ul>
  );
};

ToDoList.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};

export default ToDoList;
