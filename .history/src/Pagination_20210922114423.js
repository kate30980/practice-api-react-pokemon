import React from "react";

export default function Pagination({ gotoPrevPage, gotoNextPage }) {
  return (
    <div>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoPrevPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  );
}
