import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup, Input, Button, InputGroup, InputGroupAddon
} from 'reactstrap';

const ToDoForm = (props) => {
  let input;

  return (
    <Form>
      <FormGroup>
        <InputGroup>
          <Input
            onInput={(node) => {
              input = node.target;
            }}
            type="text"
            name="description"
            id="todoText"
            placeholder="What do you want to do?"
          />
          <InputGroupAddon addonType="append">
            <Button
              onClick={() => {
                props.addTodo(input.value);
                input.value = '';
              }}
              color="primary"
            >
              +
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

ToDoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default ToDoForm;
