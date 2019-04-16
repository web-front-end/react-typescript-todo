import { storiesOf } from "@storybook/react";
import * as React from "react";
import TodoList from "./TodoList";

const prop = {
  todos: [
    {
      id: 1,
      title: "Todo 1",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.",
      isCompleted: false
    },
    {
      id: 2,
      title: "Todo 2",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.",
      isCompleted: false
    },
    {
      id: 3,
      title: "Todo 3",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.",
      isCompleted: false
    },
    {
      id: 4,
      title: "Todo 4",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.",
      isCompleted: false
    },
    {
      id: 5,
      title: "Todo 5",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.",
      isCompleted: false
    },
    {
      id: 6,
      title: "Todo 6",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.",
      isCompleted: false
    },
    {
      id: 7,
      title: "Todo 7",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.",
      isCompleted: false
    },
    {
      id: 8,
      title: "Todo 8",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.",
      isCompleted: false
    }
  ],
  history : {},
  deleteTodo: () =>{}
  };
storiesOf("TodoList", module).add("Simple", () => (
  <div style={{ margin: 40 }}>
  <TodoList {...prop} />
  </div>
));
