import PropTypes from 'prop-types';
import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const ToDo = ({ removeTodo, todo }) => {
  const { id, description } = todo;

  return (
    <ListGroup.Item className="todo-list-item hoverable">
      <span className="todo-list-item-text">{description}</span>
      <Button className="float-right" variant="danger" size="sm" onClick={() => { removeTodo(id); }}>X</Button>
    </ListGroup.Item>
  );
};

ToDo.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

export default ToDo;
