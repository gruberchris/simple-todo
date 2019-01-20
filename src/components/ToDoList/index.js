import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

import ToDo from '../ToDo';

const ToDoList = ({ todos, removeTodo }) => {
  const todoNode = todos.map(todo => (
    <ToDo key={todo.id} todo={todo} removeTodo={removeTodo} />
  ));

  return (
    <ListGroup>{todoNode}</ListGroup>
  );
};

ToDoList.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};

export default ToDoList;
