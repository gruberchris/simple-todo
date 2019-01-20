import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Button, FormControl } from 'react-bootstrap';

const ToDoForm = (props) => {
  let input;

  return (
    <div>
      <InputGroup>
        <FormControl
          placeholder="What do you want to do?"
          aria-label="What do you want to do?"
          aria-describedby="basic-addon2"
          onInput={(node) => {
            input = node.target;
          }}
        />
        <InputGroup.Append>
          <Button
            variant="outline-primary"
            onClick={() => {
              props.addTodo(input.value);
              input.value = '';
            }}
          >
            +
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

ToDoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default ToDoForm;
