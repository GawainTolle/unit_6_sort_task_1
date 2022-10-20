import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark, id, onToggle }) => {
    return (
        <button className="btn btn-dark" onClick={() => onToggle(id)}>
            <i className={"bi bi-disc" + (bookmark ? "-fill" : "")}></i>
        </button>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired
};

export default Bookmark;
