import React from 'react';

const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content"></div>
      <div className="ui two buttons"></div>
      <div className="ui basic green button">Approve</div>
      <div className="ui basic red button">Reject</div>
    </div>
  );
};

export default ApprovalCard;
