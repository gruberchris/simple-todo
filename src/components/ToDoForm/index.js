import React from 'react';
import PropTypes from 'prop-types';

const ToDoForm = (props) => {
  let input;

  return (
    <div>
      <input ref={(target) => { input = target; }} />
      <button
        type="button"
        onClick={() => {
          props.addTodo(input.value);
          input.value = '';
        }}
      >
        +
      </button>
    </div>
  );
};

ToDoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default ToDoForm;

/*
const ToDoForm = (props) => {
  let input;

  return (
    <div>
      <input onInput={(node) => { input = node.target; }} />
      <button
        type="button"
        onClick={() => {
          props.addTodo(input.value);
          input.value = '';
        }}
      >
        +
      </button>
    </div>
  );
};
*/
