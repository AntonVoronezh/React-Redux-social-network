import React from "react";
import { TextArea } from "semantic-ui-react";

type PropsType = {
  newMessageText: string;
  addNewMessageCB: (a: any) => void;
};

const Textarea: React.FC<PropsType> = ({ newMessageText, addNewMessageCB }) => {
  const textareaHandler = ({ nativeEvent: { data } }: any) => {
    addNewMessageCB(data);
  };
  return (
    <React.Fragment>
      <TextArea
        rows={3}
        value={newMessageText}
        onChange={textareaHandler}
        style={{ width: "100%" }}
      />
    </React.Fragment>
  );
};

export default Textarea;
