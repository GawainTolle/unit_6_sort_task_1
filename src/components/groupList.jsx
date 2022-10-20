import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  activeItem,
  onItem,
  valueProperty,
  contentProperty
}) => {
  if (!Array.isArray(items)) {
    return (
      <ul className="list-group">
        {Object.keys(items).map((item) => (
          <li
            className={
              "list-group-item" + (activeItem === items[item] ? " active" : "")
            }
            onClick={() => onItem(items[item])}
            key={items[item][valueProperty]}
            role="button"
          >
            {items[item][contentProperty]}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={"list-group-item" + (item === activeItem ? " active" : "")}
          onClick={() => onItem(item)}
          role="button"
        >
          {item[contentProperty]}
        </li>
      ))}
    </ul>
  );
};
GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name"
};
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  activeItem: PropTypes.object,
  onItem: PropTypes.func.isRequired,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired
};

export default GroupList;
