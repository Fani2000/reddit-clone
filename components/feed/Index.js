import Post from "../common/Post";
import CreatePost from "./CreatePost";

const posts = [
  { id: 0, title: "Build reddit", author: "fani" },
  { id: 1, title: "Build medium", author: "menlu" },
  { id: 2, title: "Build facebook", author: "fani" },
];

const Feed = () => {
  return (
    <div className="flex flex-col space-y-3">
      <CreatePost />
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Feed;
