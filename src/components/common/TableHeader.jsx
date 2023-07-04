import React, { Component } from "react";
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
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((col) => (
            <th
              key={col.path || col.key}
              onClick={() => this.raiseSort(col.path)}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
