import React from "react";

import { Icon } from "semantic-ui-react";

const NotFound = () => {
  return (
    <React.Fragment>
      <Icon name="ban" size="huge" style={{ color: "red" }} />
      <br />
      NotFound{" "}
    </React.Fragment>
  );
};

export default NotFound;
