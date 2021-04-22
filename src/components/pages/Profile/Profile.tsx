import React from "react";
import { Segment, Loader } from "semantic-ui-react";

import Textarea from "../../elements/UI/Textarea/Textarea";
import Button from "../../elements/UI/Button/Button";
import Posts from "../../elements/Posts/Posts";

type PropsType = {
  error: { message: string };
  posts: any;
  newMessageText: string;
  description: string;
  image: any;
  addPostCB: () => void;
  addNewMessageCB: () => void;
  isLoading: boolean;
  profile: any;
};

const Profile: React.FC<PropsType> = ({
  posts,
  newMessageText,
  description,
  image,
  addPostCB,
  addNewMessageCB,
  isLoading,
  profile,
  error,
}) => {
  let profileUser, result;

  if (profile) {
    !error
      ? (profileUser = profile.fullName)
      : (profileUser = `Ошибка "${error.message}". Попробуйте еще раз.`);
  }

  isLoading
    ? (result = (
        <Loader size="large" active>
          Loading
        </Loader>
      ))
    : (result = profileUser);

  return (
    <React.Fragment>
      <Segment>
        <img src={image} alt={description} style={{ width: "100%" }} />
        {result}
      </Segment>
      <Segment>
        <Textarea
          newMessageText={newMessageText}
          addNewMessageCB={addNewMessageCB}
        />
        <Button content="Добавить пост" callback={addPostCB} id={1}/>
      </Segment>
      <Segment>
        <Posts posts={posts} />
      </Segment>
    </React.Fragment>
  );
};

export default Profile;
