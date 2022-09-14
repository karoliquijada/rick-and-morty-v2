import { React, useState, useEffect } from "react";

const Pagination = ( {props}) => {
  const { previos } = props;
  
  const prev = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
    console.log("Prev" + page);
  };

  const next = () => {
   
    if (page < pages) {
      setPage(page + 1);
      console.log("Next" + page);
    }
  };

  return (
    <div className="pagination">
      <button className="block" onClick={prev}>
        Prev
      </button>
      <button className="block" onClick={next}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
