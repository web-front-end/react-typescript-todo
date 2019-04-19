import * as React from "react";
import { StructuredListSkeleton } from "carbon-components-react";
import { Todo } from "./../types/todo";
import { TodoList, Footer } from "./../components";
import { TodoListProps } from "./../components/todo/TodoList";
import { listTodos, deleteTodoAPI } from "./../apis/todo";

interface TodoPageProps {
  history: any;
}

interface TodoPageState {
  todos: Array<Todo>;
  isLoading: boolean;
}

export default class TodoPage extends React.PureComponent<
  TodoPageProps,
  TodoPageState
> {
  state: TodoPageState = {
    todos: [],
    isLoading: true
  };

  componentDidMount() {
    // fetch list
    setTimeout(() => {
      listTodos("", arr => {
        this.setState({
          todos: arr,
          isLoading: false
        });
      });
    }, 1000);
  }

  _sortTodos = () => {
    const {todos} = this.state;
    const arr = JSON.parse(JSON.stringify(todos)); // creat a copy
    this.setState({
      todos: arr.reverse()
    })
  };

  _deleteTodo = id => {
    deleteTodoAPI(id, todos => {
      this.setState({ todos });
    });
  };

  render() {
    const { todos, isLoading } = this.state;
    const { history } = this.props;
    const todoListProps = {
      todos,
      history,
      deleteTodo: this._deleteTodo,
      sortTodos: this._sortTodos
    } as TodoListProps;
    const footerProps = {
      todoAmount: todos.length,
      clickFilterHandler: () => {}
    };
    return (
      <article className="todo-container">
        {isLoading ? (
          <StructuredListSkeleton />
        ) : (
          <TodoList {...todoListProps} />
        )}
        <Footer {...footerProps} />
      </article>
    );
  }
}
