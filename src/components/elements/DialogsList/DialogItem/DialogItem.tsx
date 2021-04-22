import React from "react";
import { List } from "semantic-ui-react";

type PropsType = {
  id: number;
  name: string;
};

const DialogItem: React.FC<PropsType> = ({ id, name }) => {
  return (
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header>{name}</List.Header>
        <List.Description>Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default DialogItem;
