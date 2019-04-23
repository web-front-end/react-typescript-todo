import * as React from "react";
import {
  TextInput,
  Form,
  Button,
  TextArea,
  FormGroup,
  InlineLoading
} from "carbon-components-react";
import "./TodoForm.scss";

interface TodoFormProps {
  addTodo: (title: string, desc: string) => void;
  isAddLoading: boolean;
}

interface TodoFormState {
  title: string;
  desc: string;
  isTitleValid: boolean;
  isDescValid: boolean;
}

export default class TodoForm extends React.PureComponent<
  TodoFormProps,
  TodoFormState
> {
  state = {
    title: "",
    desc: "",
    isTitleValid: false,
    isDescValid: false
  };
  changeHandler = e => {
    let target: any = e.target;
    let name: string = target.name;
    let value: string = target.value;
    const state: any = {
      [name]: value
    };
    this.setState(state);
  };

  submitHandler = e => {
    e.preventDefault();
    const { addTodo } = this.props;
    const { title, desc } = this.state;
    if (title.trim() === "") {
      this.setState({
        isTitleValid: true
      });
    } else if (desc.trim() === "") {
      this.setState({
        isDescValid: true
      });
    } else {
      addTodo(title, desc);
    }
  };
  render() {
    const { isAddLoading } = this.props;
    const { isTitleValid, isDescValid } = this.state;
    return (
      <form className="todo-form" onSubmit={this.submitHandler}>
        <FormGroup className="some-class" legendText="">
          <TextInput
            id="title"
            className="some-class"
            value={this.state.title}
            labelText="Todo Title"
            name="title"
            type=""
            placeholder="Please input a todo title 😄"
            hideLabel={false}
            invalidText="title can't be empty"
            onChange={this.changeHandler}
            invalid={isTitleValid}
          />
        </FormGroup>
        <FormGroup className="some-class" legendText="">
          <TextArea
            name="desc"
            className="some-class"
            hideLabel={false}
            labelText="Todo Desc"
            invalidText="Desc can't be empty"
            placeholder="Todo Description"
            id="desc"
            value={this.state.desc}
            onChange={this.changeHandler}
            invalid={isDescValid}
          />
        </FormGroup>
        <Button
          kind="primary"
          className="some-class"
          iconDescription="Add Todo"
          small
          type="submit"
        >
          {isAddLoading ? <InlineLoading description="" /> : "Add Todo"}
        </Button>
      </form>
    );
  }
}
