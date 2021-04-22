import React from "react";
import { Message, Icon } from "semantic-ui-react";

type PropsType = {
  message: string;
  likeCount: number;
};

const Posts: React.FC<PropsType> = ({ message, likeCount }) => {
  return (
    <React.Fragment>
      <Message>
        <p>
          {message}
          <br />
          <Icon name="thumbs up" />
          {likeCount}
        </p>
      </Message>
    </React.Fragment>
  );
};

export default Posts;
