import React from "react";
import './styles/pagination.css'

const Pagination = ({ page, pagesLength, setPage }) => {

  const pagesPerBlock = 8;
  //    1     /   8     = 0.125
  //    2     /   8     = 0.25
  const currentBlock = Math.ceil(page / pagesPerBlock); //ceil redondea siempre hacia arriba
  const blockLength = Math.ceil(pagesLength / pagesPerBlock);

  const arrPages = [];
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1;
  //initialPage + pagesPerBlock - 1
  const limitPage =
    blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock;
  for (let i = initialPage; i <= limitPage; i++) {
    arrPages.push(i);
  }

const handlePrev = () => {
  setPage(page - 1)
}

const handleNext = () => {
  setPage(page + 1)
}

const handlePage = currentPage => {
  setPage(currentPage)
}

const handleFirst = () => {
  setPage(initialPage)
}

const handleLast = () => {
  setPage(limitPage)
}

  return (
    <div className="pagination">
      {
        page > 1 &&
        <div onClick={handlePrev} className="pagination_prev pagination_active">&#60;</div>  
      }
      {
        page > 1 &&
        <div className="pagination_first pagination_active" onClick={handleFirst}>&#60;&#60;</div>
      }
      <ul className="pagination_container">
        {
          arrPages.map(e => (
            <li 
            className={`pagination_page ${page === e && "pagination_active"}`}
            onClick={() => handlePage(e)}
            key={e}>
              {e}
            </li>
          ))
        }
      </ul>
      {
        page < pagesLength &&
        <div className="pagination_last pagination_active" onClick={handleLast}>&#62;&#62;</div>
      }
      {
        page < pagesLength &&
        <div 
        onClick={handleNext}
        className="pagination_next pagination_active">&#62;</div>
      }
      </div>
  );
};

export default Pagination;
