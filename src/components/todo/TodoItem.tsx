import * as React from "react";
import {
  StructuredListRow,
  StructuredListCell,
  Icon
} from "carbon-components-react";
import { iconDelete } from "carbon-icons";
import { Todo } from "../../types/todo";

interface TodoItemProps {
  todo: Todo,
  deleteTodo: (id: number) => void
}

const TodoItem: React.FunctionComponent<TodoItemProps> = props => {
  const { todo, deleteTodo } = props;
  const {id, title, desc} = todo;
  return (
    <StructuredListRow>
      <StructuredListCell noWrap>{title}</StructuredListCell>
      <StructuredListCell>{desc}</StructuredListCell>
      <StructuredListCell>
        <Icon
          className="bx--structured-list-svg"
          icon={iconDelete}
          description="select an option"
          onClick={() => {
            deleteTodo(id)
          }}
        />
      </StructuredListCell>
    </StructuredListRow>
  );
};

export default TodoItem;
