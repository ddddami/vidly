import { BsHeart, BsHeartFill } from "react-icons/bs";
const Like = ({ liked, onToggleLike }) => {
  return liked ? (
    <BsHeartFill style={{ cursor: "pointer" }} onClick={onToggleLike} />
  ) : (
    <BsHeart style={{ cursor: "pointer" }} onClick={onToggleLike} />
  );
};

export default Like;
