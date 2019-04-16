import { storiesOf } from "@storybook/react";
import * as React from "react";
import TodoItem from "./TodoItem";
const prop = {
  todo: {
    id: 1,
    title: "Todo 1",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.",
    isCompleted: false
  },
  deleteTodo: () => {}
};
storiesOf("TodoItem", module).add("Simple", () => <TodoItem {...prop} />);
