import React from "react";

function ApprovalCard(props) {
  return (
    <div style={approvalCard}>
      {props.children}
      <div style={btns}>
        <button>Approve</button>
        <button>Reject</button>
      </div>
    </div>
  );
}

const approvalCard = {
  border: "1px solid #000",
  padding: "1rem",
  marginBottom: "1rem"
};

const btns = {
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem"
};

export default ApprovalCard;
