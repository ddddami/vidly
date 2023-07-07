import { BsHeart, BsHeartFill } from "react-icons/bs";
const Like = ({ liked, onToggleLike }) => {
  return liked ? (
    <BsHeartFill className="clickable" onClick={onToggleLike} />
  ) : (
    <BsHeart className="clickable" onClick={onToggleLike} />
  );
};

export default Like;
