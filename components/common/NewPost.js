import { supabase } from "../../services/superbaseClient";
import { useRouter } from "next/router";
import { useState } from "react";

const styles = {
  wrapper: "flex flex-col space-y-6",
  heading: "font-medium text-2xl mb-5",
  input:
    "bg-[#1a1a1b] border border-[#343536] px-4 py-2 text-left text-white text-sm focus:outline-none",
  title: "border-b border-[#343536] pb-3 text-lg font-medium",
  postBtn:
    "bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1A1A1B] rounded-full",
  postBtnContainer: "flex justify-end pt-2",
};

const NewPost = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const createPost = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      await supabase.from("feed").insert([
        {
          author: "Fani Keorapetse",
          title,
          content,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Create a post</h1>
      <div className="flex flex-col space-y-2 rounded bg-[#1a1a1a] p-4">
        <input
          className={styles.input}
          value={title}
          onChange={() => setTitle(event.currentTarget.value)}
          type="text"
          placeholder="Title"
        />
        <textarea
          className={styles.input}
          name="content"
          value={content}
          onChange={() => setContent(event.currentTarget.value)}
          id="content"
          rows={10}
          cols={30}
          placeholder="Text (required)"
        />
        <div className={styles.postBtnContainer}>
          <button onClick={createPost} className={styles.postBtn}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
