import { useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  return (props) => {
    const navigate = useNavigate();
    const params = useParams();
    return <Component navigate={navigate} params={params} />;
  };
}

export default withRouter;
