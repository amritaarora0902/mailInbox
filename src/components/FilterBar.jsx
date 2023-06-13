import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../store/action";

const FilterBar = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filterMails);

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <button
        onClick={() => handleFilterChange("inbox")}
        disabled={currentFilter === "inbox"}
      >
        Inbox
      </button>
      <button
        onClick={() => handleFilterChange("draft")}
        disabled={currentFilter === "draft"}
      >
        Draft
      </button>
      <button
        onClick={() => handleFilterChange("spam")}
        disabled={currentFilter === "spam"}
      >
        Spam
      </button>
      <button
        onClick={() => handleFilterChange("trash")}
        disabled={currentFilter === "trash"}
      >
        Trash
      </button>
    </div>
  );
};

export default FilterBar;
