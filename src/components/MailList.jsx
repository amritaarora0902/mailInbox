import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MailItem from "./MailItem";
import { selectMail } from "../store/action";

const MailList = ({ isSearchedMail }) => {
  const mails = useSelector((state) => state.mails);
  const searchedMails = useSelector((state) => state.searchedMails);

  const [mailsToDisplay, setMailsToDisplay] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRouteAndOpenMail = (mail) => {
    dispatch(selectMail(mail));
    const mailUrl = `/mail/${mail.id}`;
    navigate(mailUrl);
  };

  useEffect(() => {
    setMailsToDisplay(mails);
  }, [searchedMails, isSearchedMail, mails]);

  return (
    <div>
      {mailsToDisplay &&
        mailsToDisplay.map((mail, i) => (
          <div key={i} onClick={() => handleRouteAndOpenMail(mail)}>
            <MailItem mail={mail} />
          </div>
        ))}
    </div>
  );
};

export default MailList;
