import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MailList from "./MailList";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import { fetchMails, setSearchMail } from "../store/action";

const Home = () => {
  const dispatch = useDispatch();

  const [isSearchedMail, setIsSearchedMail] = useState(false);

  useEffect(() => {
    // Fetch mails when the component mounts
    dispatch(fetchMails());
  }, [dispatch]);

  const onSearch = (searchTerm) => {
    if (searchTerm) {
      dispatch(setSearchMail(searchTerm));
      setIsSearchedMail(true);
    } else {
      dispatch(setSearchMail(""));
      setIsSearchedMail(false);
    }
  };

  return (
    <div>
      <h1>Mail Inbox</h1>
      <SearchBar onSearch={onSearch} />
      <FilterBar />
      <div>
        <div>
          <h2>Mail List</h2>
          <MailList isSearchedMail={isSearchedMail} />
        </div>
      </div>
    </div>
  );
};

export default Home;
