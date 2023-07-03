import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, Math.ceil(pagesCount) + 1);

  if (pagesCount === 1) return null;
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            style={{ cursor: "pointer" }}
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <btn
              href="#"
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </btn>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
