import { storiesOf } from "@storybook/react";
import * as React from "react";
import Footer from "./Footer";

const prop ={
    clickFilterHandler: () =>{},
    todoAmount: 2
}

storiesOf("Footer", module).add("Simple", () => 
<div style={{margin:40}}><Footer {...prop}/></div>
);