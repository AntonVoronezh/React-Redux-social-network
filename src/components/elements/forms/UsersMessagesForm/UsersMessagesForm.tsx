import React from "react";

import Textarea from "../../UI/Textarea/Textarea";
import Button from "../../UI/Button/Button";

type PropsType = {
  newDialogText: string;
  addDialogCB: () => void;
  addNewDialogTextCB: (a: any) => void;
  location: { pathname: string };
};

const UsersMessagesForm: React.FC<PropsType> = ({
  newDialogText,
  addDialogCB,
  addNewDialogTextCB,
  location: { pathname },
  ...rest
}) => {
  const id = Number(pathname.split("/")[2]);

  return (
    <React.Fragment>
      <Textarea
        newMessageText={newDialogText}
        addNewMessageCB={addNewDialogTextCB}
      />
      <Button content="Добавить" callback={addDialogCB} id={id} />
    </React.Fragment>
  );
};

export default UsersMessagesForm;
