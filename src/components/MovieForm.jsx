import React from "react";
import Joi from "joi";
import Form from "./common/Form";
import withRouter from "../hoc/withRouter";
import { getGenres } from "../services/genreService";
import { getMovie, saveMovie } from "../services/movieService";
import { Navigate } from "react-router-dom";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      numberInStock: "",
      dailyRentalRate: "",
      genreId: "",
    },
    errors: {},
    genres: [],
    redirect: false,
  };
  async componentDidMount() {
    const { data: genres } = await getGenres();
    this.setState({ genres });

    const movieId = this.props.params.id;
    if (movieId === "new") return;
    try {
      const { data: movie } = await getMovie(movieId);
      if (!movie) {
        this.setState({ redirect: true });
        return;
      }
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("The movie has already been deleted.");
    }
  }
  schema = Joi.object({
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .max(100)
      .required()
      .label("Number in stock"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Daily rental rate"),
  });
  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
      genreId: movie.genre._id,
    };
  }
  doSubmit = () => {
    saveMovie(this.state.data);
    return this.props.navigate("/movies");
  };

  render() {
    if (this.state.redirect) return <Navigate to="/not-found" />;

    return (
      <div>
        <h1>Movies Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default withRouter(MovieForm);
