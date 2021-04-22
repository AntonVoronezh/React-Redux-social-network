import React from "react";
import { List } from "semantic-ui-react";

import Message from "./Message/Message";

type PropsType = {
  messages: { [key: string]: Array<{ id: number; text: string }> };
  location: { pathname: string };
};

const Messages: React.FC<PropsType> = ({
  location: { pathname },
  messages,
}) => {
  const id = Number(pathname.split("/")[2]);

  let list;

  !isNaN(id)
    ? (list = messages[id].map((m: { id: number; text: string }) => {
        return <Message key={m.id} {...m} />;
      }))
    : (list = "Выберите с кем переписываться");

  return (
    <React.Fragment>
      <List divided relaxed>
        {list}
      </List>
    </React.Fragment>
  );
};

export default Messages;
