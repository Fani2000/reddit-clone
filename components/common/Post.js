import Vote from "../feed/Vote";
import Actions from "../feed/Actions";
import Info from "../feed/Info";
import dateFormat, { masks } from "dateformat";

const style = {
  wrapper: "flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border-[#343536]",
  post: "flex flex-col space-y-1 cursor-pointer",
  postTitle: "text-lg font-medium text-[#D7DADC]",
  postContent: "text-sm font-light text-[#D7DADC]/80",
};

const Post = ({ title, author, id, content, downvote, upvote, created_at }) => {
  // console.log(title, content, author, id, upVote, downVote, created_at);
  const date = new Date(created_at);
  // console.log(dateFormat(date, "d mmm"));
  return (
    <div className={style.wrapper}>
      <Vote downvote={downvote} upvote={upvote} />
      <div className={style.post}>
        <Info
          author={author}
          date={dateFormat(new Date(created_at), "mmm d")}
        />
        <h1 className={style.postTitle}>{title}</h1>
        <p className={style.postContent}>{content}</p>
        <Actions />
      </div>
    </div>
  );
};
export default Post;
