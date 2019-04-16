import * as React from "react";
import {
  StructuredListRow,
  StructuredListCell,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  Icon
} from "carbon-components-react";
import { iconAdd } from "carbon-icons";
import TodoItem from "./TodoItem";
import { Todo } from "./../../types/todo";
import "./TodoList.scss";

export interface TodoListProps {
  todos: Todo[]
  history: any
  deleteTodo: (id: number) => void
}

const TodoList: React.FunctionComponent<TodoListProps> = props => {
  const { todos ,history, deleteTodo} = props;
  return (
    <StructuredListWrapper selection border>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>Title</StructuredListCell>
          <StructuredListCell head>Description</StructuredListCell>
          <StructuredListCell head>
            <Icon
              className="icon-add"
              icon={iconAdd}
              description="add a todo"
              onClick={() => {
                history.push('/form')
              }}
            />
          </StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        {todos.length > 0 &&
          todos.map(todo => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />)}
      </StructuredListBody>
    </StructuredListWrapper>
  );
};

export default TodoList;
