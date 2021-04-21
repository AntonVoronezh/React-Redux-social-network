import React from "react";
import { NavLink } from "react-router-dom";
import { Segment } from "semantic-ui-react";

import classes from "./User.module.css";
import Img from "../../../assets/img/1.png";
import Button from "../UI/Button/Button";

type PropsType = {
  followCB: () => void;
  unfollowCB: () => void;
  photos: { small: string };
  name: string;
  followed: boolean;
  id: number;
  status: string;
};

const Users: React.FC<PropsType> = ({
  followCB,
  unfollowCB,
  photos,
  name,
  followed,
  id,
  status,
}) => {
  return (
    <React.Fragment>
      <Segment.Group horizontal className={classes.user}>
        <Segment className={classes.avatar}>
          <NavLink to={`/profile/${id}`}>
            <img src={photos.small !== null ? photos.small : Img} alt={name} />
          </NavLink>

          <br />
          {!followed ? (
            <Button
              callback={followCB}
              content="Follow"
              id={id}
              // disabled={status === statuses.REQUEST}
            />
          ) : (
            <Button
              callback={unfollowCB}
              content="UnFollow"
              id={id}
              // disabled={status === statuses.REQUEST}
            />
          )}
        </Segment>
        <Segment className={classes.contaent}>{name}</Segment>
      </Segment.Group>
    </React.Fragment>
  );
};

export default Users;
