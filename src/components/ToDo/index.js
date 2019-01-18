import PropTypes from 'prop-types';
import React from 'react';
import { ListGroupItem } from 'reactstrap';

const ToDo = ({ removeTodo, todo }) => {
  const { id, description } = todo;

  return (
    <ListGroupItem onClick={() => { removeTodo(id); }}>{description}</ListGroupItem>
  );
};

ToDo.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

export default ToDo;
