import React from "react";
import { Segment } from "semantic-ui-react";

import classes from "./Dialogs.module.css";
import DialogsList from "../../elements/DialogsList/DialogsList";
import Messages from "../../elements/Messages/Messages";
import UsersMessagesForm from "../../elements/forms/UsersMessagesForm/UsersMessagesForm";

type PropsType = {
  newDialogText: string;
  messages: { [key: string]: Array<{ id: number; text: string }> };
  dialogs: { id: number; name: string; }[];
  addDialogCB: () => void;
  addNewDialogTextCB: () => void;
  location: any;
};

const Dialogs: React.FC<PropsType> = (props) => {
  return (
    <React.Fragment>
      <div className={classes.dialogs}>
        <Segment className={classes.users}>
          <DialogsList {...props} />
        </Segment>
        <Segment className={classes.messages}>
          <Messages {...props} />
          {props.location.pathname === "/dialogs" ? null : (
            <UsersMessagesForm {...props} />
          )}
        </Segment>
      </div>
    </React.Fragment>
  );
};

export default Dialogs;
