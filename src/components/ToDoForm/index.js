import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToDoForm = (props) => {
  let input;

  return (
    <div>
      <InputGroup className="todo-input">
        <InputGroup.Prepend>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faCommentAlt} />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="What do you want to do?"
          aria-label="What do you want to do?"
          aria-describedby="basic-addon2"
          onInput={(node) => {
            input = node.target;
          }}
        />
        <Button
          onClick={() => {
            if (input) {
              props.addTodo(input.value);
              input.value = '';
            }
          }}
        >
          Add
        </Button>
      </InputGroup>
    </div>
  );
};

ToDoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default ToDoForm;
