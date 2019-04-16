import * as React from "react";
import { Button, Tag } from "carbon-components-react";
import "./Footer.scss";

export interface FooterProps {
  todoAmount: Number;
  clickFilterHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Footer: React.FunctionComponent<FooterProps> = props => {
  const {todoAmount} = props;
  return (
    <footer className="todo-footer">
      <Tag className="some-class" type="blue" disabled={false}>
        {`Todo items ${todoAmount}`}
      </Tag>
      <div className="action">
        <Button kind="tertiary" className="some-class" small>
          All
        </Button>
        <Button kind="tertiary" className="some-class" small>
          Completed
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
