import React from "react";
import { Avatar } from "@material-ui/core";

const Photo = (props) => {
  return (
    <Avatar
      imgProps={{ style: { borderRadius: "50%" } }}
      src={props.avatarUrl}
      style={{
        width: "3rem",
        height: "3rem",
      }}
    />
  );
};

export default Photo;
