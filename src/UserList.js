import React from "react";

function UserList(props) {
  return (
    <div style={style}>
      <h1>{props.name}</h1>
      <p>A good Student</p>
    </div>
  );
}

const style = {
  border: "1px solid rgba(0, 0, 0, 0.3)",
  padding: "1rem",
  margin: "0",
  background: "coral",
  color: "#fff",
  fontFamily: "Arial",
  marginBottom: "0.5rem"
};

export default UserList;
