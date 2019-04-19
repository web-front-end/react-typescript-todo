import * as React from "react";
import {
  StructuredListRow,
  StructuredListCell,
  Icon
} from "carbon-components-react";
import { iconDelete } from "carbon-icons";
import { Todo } from "../../types/todo";

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FunctionComponent<TodoItemProps> = props => {
  const { todo, deleteTodo } = props;
  const { id, title, desc } = todo;
  React.useEffect(() => {
    // Specify how to clean up after this effect:
    console.log(`${todo.title} component is mounted`);
    return function cleanup() {
      console.log(`${todo.title} component is cleaned up`);
    };
  },[]);
  return (
    <StructuredListRow>
      <StructuredListCell noWrap>{title}</StructuredListCell>
      <StructuredListCell>{desc}</StructuredListCell>
      <StructuredListCell>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            deleteTodo(id);
          }}
        >
          <Icon
            className="bx--structured-list-svg"
            icon={iconDelete}
            description="select an option"
          />
        </a>
      </StructuredListCell>
    </StructuredListRow>
  );
};

export default TodoItem;
