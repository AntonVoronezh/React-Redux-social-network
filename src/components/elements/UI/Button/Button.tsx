import React from "react";
import { Button } from "semantic-ui-react";

type PropsType = {
  content: any;
  callback: (a: any) => any;
  id: number;
};

const ButtonMy: React.FC<PropsType> = ({ content, callback, ...rest }) => {
  const buttonHandler = () => {
    callback(rest.id);
  };
  return (
    <React.Fragment>
      <Button content={content} onClick={buttonHandler} />
    </React.Fragment>
  );
};

export default ButtonMy;
