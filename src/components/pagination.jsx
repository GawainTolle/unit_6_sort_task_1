import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ pageSize, usersLength, activePage, onPage }) => {
    const totalPages = Math.ceil(usersLength / pageSize);
    if (totalPages === 1) return null;
    const pages = _.range(1, totalPages + 1);
    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li className="page-item" key={page}>
                        <button
                            className={
                                "page-link" +
                                (page === activePage ? " active" : "")
                            }
                            onClick={() => onPage(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired,
    usersLength: PropTypes.number.isRequired,
    onPage: PropTypes.func.isRequired,
    activePage: PropTypes.number
};

export default Pagination;
