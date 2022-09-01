import type { NextPage } from "next";
import Header from "../components/header";
import NewPost from "../components/common/NewPost";
import About from "../components/community/About";

const style = {
  wrapper: `flex min-h-screen flex-col bg-black text-white`,
  main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6 mt-16 justify-between`,
};

const New = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style.main}>
        <div className="w-full lg:w-2/3">
          <NewPost />
        </div>
        <div className="hidden w-1/3 lg:block">
          <About />
        </div>
      </main>
    </div>
  );
};

export default New;
