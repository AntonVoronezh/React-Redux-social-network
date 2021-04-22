import React from "react";

import { List } from "semantic-ui-react";

type PropsType = {
  text: string;
};

const Messages: React.FC<PropsType> = ({ text }) => {
  return (
    <React.Fragment>
      <List.Item>{text}</List.Item>
    </React.Fragment>
  );
};

export default Messages;
