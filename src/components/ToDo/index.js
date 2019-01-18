import PropTypes from 'prop-types';
import React from 'react';

const ToDo = ({ removeTodo, todo }) => {
  const { id, description } = todo;

  return (
    <li onClick={() => { removeTodo(id); }}>{description}</li>
  );
};

ToDo.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

export default ToDo;
