import { useEffect, useState } from "react";
import useSWR from "swr";
import Post from "../common/Post";
import CreatePost from "./CreatePost";

// DUMMY DATA FOR STYLING
// const _posts = [
//   { id: 0, title: "Build reddit", author: "fani" },
//   { id: 1, title: "Build medium", author: "menlu" },
//   { id: 2, title: "Build facebook", author: "fani" },
// ];

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/get-posts", fetcher, {
    refreshInterval: 200,
  });

  useEffect(() => {
    if (!data) return;
    setPosts(data.data);
  }, [data]);

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
