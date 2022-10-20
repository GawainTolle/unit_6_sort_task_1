import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({
  onSort,
  selectedSort,
  columns,
  activeHeader,
  onHeader
}) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc"
      });
    } else {
      onSort({ path: item, order: "asc" });
    }
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{ role: columns[column].path && "button" }}
            scope="col"
          >
            <span>
              {
                <i
                  className={
                    columns[column].path
                      ? "bi bi-arrow-" +
                        (activeHeader === columns[column].path
                          ? "down-square-fill"
                          : "up-square-fill")
                      : undefined
                  }
                  onClick={
                    columns[column].path
                      ? () => onHeader(columns[column].path)
                      : undefined
                  }
                ></i>
              }
              {columns[column].name}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};
TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
  activeHeader: PropTypes.string,
  onHeader: PropTypes.func.isRequired
};

export default TableHeader;
