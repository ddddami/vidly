import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/Like";
class Movies extends Component {
  state = { movies: getMovies() };
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
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies in the database!</p>;
    return (
      <>
        {count && <p>Showing {count} movies in the database!</p>}
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  {
                    <Like
                      liked={movie.liked}
                      onToggleLiked={() => this.handleToggleLike(movie)}
                    />
                  }
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
