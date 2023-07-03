import { BsHeart, BsHeartFill } from "react-icons/bs";
const Like = ({ liked, onToggleLiked }) => {
  return liked ? (
    <BsHeartFill style={{ cursor: "pointer" }} onClick={onToggleLiked} />
  ) : (
    <BsHeart style={{ cursor: "pointer" }} onClick={onToggleLiked} />
  );
};

export default Like;
