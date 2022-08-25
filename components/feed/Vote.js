import { UpvoteIcon } from "../common/UpvoteIcon";
import { DownvoteIcon } from "../common/DownvoteIcon";

const style = {
  votes: "py-1 text-xs font-bold text-white",
  wrapper: "flex flex-col items-center",
};

const Vote = ({ downvote, upvote }) => {
  // console.log(downvote, upvote);
  return (
    <div className={style.wrapper}>
      <button>
        <UpvoteIcon />
      </button>
      <p className={style.votes}>{upvote - downvote}</p>
      <button>
        <DownvoteIcon />
      </button>
    </div>
  );
};

export default Vote;
