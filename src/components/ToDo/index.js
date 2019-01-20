import PropTypes from 'prop-types';
import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ToDo = ({ removeTodo, todo }) => {
  const { id, description } = todo;

  return (
    <ListGroup.Item onClick={() => { removeTodo(id); }}>{description}</ListGroup.Item>
  );
};

ToDo.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

export default ToDo;
