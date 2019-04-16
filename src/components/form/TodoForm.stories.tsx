import { storiesOf } from "@storybook/react";
import * as React from "react";
import TodoForm from "./TodoForm";

const prop = {
  addTodo: () => {},
  isAddLoading: false
};

storiesOf("TodoForm", module).add("Simple", () => (
  <div style={{ margin: 40 }}>
    <TodoForm {...prop} />
  </div>
));
