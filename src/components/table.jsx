import React from "react";
import PropTypes from "prop-types";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ onSort, selectedSort, columns, data, children, ...rest }) => {
  return (
    <table className="table table-info table-striped-columns">
      {children || (
        <>
          <TableHeader {...{ onSort, selectedSort, columns }} {...rest} />
          <TableBody {...{ columns, data }} />
        </>
      )}
    </table>
  );
};
Table.propTypes = {
  onSort: PropTypes.func,
  selectedSort: PropTypes.object,
  columns: PropTypes.object,
  data: PropTypes.array,
  children: PropTypes.array
};

export default Table;
