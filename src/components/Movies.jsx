import React, { Component } from "react";
import _ from "lodash";
import ListGroup from "./common/ListGroup";
import Pagination from "./common/Pagination";
import MoviesTable from "./MoviesTable";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import paginate from "../utils/paginate";
import filter from "../utils/filter";
class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 4,
    genres: [],
    selectedGenre: "",
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleToggleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movie[index] = { ...movie[index] };
    movie.liked = !movie.liked;
    this.setState({ movies });
    // const movies = this.state.movies.map((m) =>
    //   m._id !== movie._id ? { ...m } : { ...m, liked: !movie.liked }
    // );
    // this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.setState({ sortColumn });
  };
  render() {
    const {
      currentPage,
      pageSize,
      genres,
      selectedGenre,
      sortColumn,
      movies: allMovies,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? filter(allMovies, this.state.selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    if (allMovies.length === 0)
      return <p>There are no movies in the database!</p>;
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemChange={this.handleGenreSelect}
            targetName="name"
            targetValue="_id"
          />
        </div>
        <div className="col">
          {allMovies.length && (
            <p>Showing {filtered.length} movies in the database!</p>
          )}
          <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            onToggleLike={this.handleToggleLike}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filtered.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
