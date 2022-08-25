import Vote from "../feed/Vote";
import Actions from "../feed/Actions";
import Info from "../feed/Info";

const style = {
  wrapper: "flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border-[#343536]",
  post: "flex flex-col space-y-1 cursor-pointer",
  postTitle: "text-lg font-medium text-[#D7DADC]",
  postContent: "text-sm font-light text-[#D7DADC]/80",
};

const Post = ({ title, author, id }) => {
  return (
    <div className={style.wrapper}>
      <Vote />
      <div className={style.post}>
        <Info author={author} />
        <h1 className={style.postTitle}>{title}</h1>
        <p className={style.postContent}>
          this will show you the step-by-step guide to building out your very
          own front-end & backend with supabase. We;ve never done this before
          and I hope you are blown away by this experience.
        </p>
        <Actions />
      </div>
    </div>
  );
};
export default Post;
