import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/Like";
import Table from "./common/Table";
import UserContext from "../context/UserContext";

class MoviesTable extends Component {
  checkColumns = () => {
    const cols = this.columns.filter((col) => typeof col === "object");
    this.columns = cols;
  };
  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie)}
        className="btn btn-sm btn-danger"
      >
        Delete
      </button>
    ),
  };
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link style={{ textDecoration: "none" }} to={`/movies/${movie._id}`}>
          {movie.title}
        </Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onToggleLike={() => this.props.onToggleLike(movie)}
        />
      ),
    },
    this.context.user?.isAdmin ? this.deleteColumn : undefined,
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props;
    this.checkColumns();
    return (
      <UserContext.Consumer>
        {() => (
          <Table
            columns={this.columns}
            data={movies}
            sortColumn={sortColumn}
            onSort={onSort}
          />
        )}
      </UserContext.Consumer>
    );
  }
}

MoviesTable.contextType = UserContext;
export default MoviesTable;
