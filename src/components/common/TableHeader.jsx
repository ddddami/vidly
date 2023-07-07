import React, { Component } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { path, order } = this.props.sortColumn;
    if (column.path !== path) return null;
    return order === "asc" ? <FaCaretUp /> : <FaCaretDown />;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((col) => (
            <th
              className="clickable"
              key={col.path || col.key}
              onClick={() => this.raiseSort(col.path)}
            >
              {col.label} {this.renderSortIcon(col)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
