import * as React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
  StructuredListRow,
  StructuredListCell,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  Icon
} from "carbon-components-react";
import { iconAdd, iconCaretDown } from "carbon-icons";
import TodoItem from "./TodoItem";
import { Todo } from "./../../types/todo";
import "./TodoList.scss";

export interface TodoListProps {
  todos: Todo[];
  history: any;
  deleteTodo: (id: number) => void;
  sortTodos: () => void;
}

const TodoList: React.FunctionComponent<TodoListProps> = props => {
  const { todos, history, deleteTodo, sortTodos } = props;
  return (
    <StructuredListWrapper selection border>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>
            Title &nbsp;
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                sortTodos();
              }}
            >
              <Icon
                className="icon-CaretSort"
                icon={iconCaretDown}
                description="add a todo"
              />
            </a>
          </StructuredListCell>
          <StructuredListCell head>Description</StructuredListCell>
          <StructuredListCell head>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                history.push("/form");
              }}
            >
              <Icon
                className="icon-add"
                icon={iconAdd}
                description="add a todo"
              />
            </a>
          </StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        <ReactCSSTransitionGroup
          transitionName="todoitem"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component={React.Fragment}
        >
          {todos.length > 0 &&
            todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </ReactCSSTransitionGroup>
      </StructuredListBody>
    </StructuredListWrapper>
  );
};

export default TodoList;
