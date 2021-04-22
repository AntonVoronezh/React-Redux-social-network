import React from "react";
import { List } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import DialogItem from "./DialogItem/DialogItem";

type PropsType = {
  dialogs: Array<{ id: number; name: string }>;
};

const Dialogs: React.FC<PropsType> = ({ dialogs }) => {
  const list = dialogs.map((d) => {
    return (
      <NavLink
        key={d.id}
        to={`/dialogs/${d.id}`}
        activeStyle={{ color: "red" }}
      >
        <DialogItem {...d} />
      </NavLink>
    );
  });

  return (
    <React.Fragment>
      <List divided relaxed>
        {list}
      </List>
    </React.Fragment>
  );
};

export default Dialogs;
