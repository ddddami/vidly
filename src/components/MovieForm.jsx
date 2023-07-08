import { useNavigate, useParams } from "react-router";

const MovieForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div>
      <p>Movie Form {id}</p>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Save
      </button>
    </div>
  );
};

export default MovieForm;
