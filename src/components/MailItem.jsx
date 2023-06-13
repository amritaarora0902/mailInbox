import React from "react";

const MailItem = ({ mail }) => {
  return (
    <div>
      <h3>{mail.subject}</h3>
      <p>{mail.sender}</p>
      <p>{mail.date}</p>
    </div>
  );
};

export default MailItem;
