import * as React from "react";
import { Todo } from "./../types/todo";
import { TodoForm } from "./../components";
import { addTodoAPI } from "./../apis/todo";

interface TodoPageProps {
  history: any;
}

interface FormPageState {
  isAddLoading: boolean;
}

export default class FormPage extends React.PureComponent<
  TodoPageProps,
  FormPageState
> {
  state: FormPageState = {
    isAddLoading: false
  };

  addTodo = (title: string, desc: string) => {
    const { history } = this.props;
    const todo = { title, desc, isCompleted: false } as Todo;
    this.setState({
      isAddLoading: true
    });
    setTimeout(() => {
      addTodoAPI(todo, () => {
        this.setState({
          isAddLoading: false
        });
        history.push("/");
      });
    }, 1000);
  };
  render() {
    const { isAddLoading } = this.state;
    const todoFormProps = {
      addTodo: this.addTodo,
      isAddLoading
    };
    return (
      <article className="todo-container">
        <TodoForm {...todoFormProps} />
      </article>
    );
  }
}
