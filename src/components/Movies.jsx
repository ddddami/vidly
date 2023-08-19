import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import _ from "lodash";
import MoviesTable from "./MoviesTable";
import ListGroup from "./common/ListGroup";
import Pagination from "./common/Pagination";
import SearchBox from "./common/SearchBox";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import paginate from "../utils/paginate";
import filter from "../utils/filter";
class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 4,
    genres: [],
    selectedGenre: "",
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };
  async componentDidMount() {
    const { data } = await getGenres();
    const { data: movies } = await getMovies();
    const genres = [{ _id: "", name: "All Genres" }, ...data];
    this.setState({ movies, genres });
  }
  handleDelete = async (movie) => {
    const orignalMovies = this.state.movies;
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This movie has already been deleted.");
        this.setState({ movies: orignalMovies });
      }
    }
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
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleSearch = (searchQuery) => {
    this.setState({ searchQuery, selectedGenre: "", currentPage: 1 });
  };

  getPagedData() {
    const {
      currentPage,
      pageSize,
      selectedGenre,
      searchQuery,
      sortColumn,
      movies: allMovies,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = filter(allMovies, this.state.selectedGenre._id);
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { count: filtered.length, data: movies };
  }
  render() {
    const {
      currentPage,
      pageSize,
      genres,
      selectedGenre,
      sortColumn,
      movies: allMovies,
    } = this.state;

    const { count, data: movies } = this.getPagedData();
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
          <Link className="mb-3 btn btn-primary" to="/movies/new">
            New Movie
          </Link>
          {allMovies.length && (
            <p style={{ margin: 0 }}>Showing {count} movies in the database!</p>
          )}

          <SearchBox
            onSearch={this.handleSearch}
            value={this.state.searchQuery}
          />
          <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            onToggleLike={this.handleToggleLike}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={count}
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
