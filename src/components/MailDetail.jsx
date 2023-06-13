import React from "react";
import { useSelector } from "react-redux";

const MailDetail = () => {
  const selectedMail = useSelector((state) => state.selectedMail);

  if (!selectedMail) {
    return <div>No mail selected</div>;
  }

  return (
    <div>
      <h1>Mail Details</h1>
      <h3>
        Subject | Tag : {selectedMail.subject + "   |   " + selectedMail.tag}
      </h3>
      <p>{selectedMail.body}</p>
      <p>{selectedMail.sender}</p>
      <p>{selectedMail.date}</p>
    </div>
  );
};

export default MailDetail;
