const style = {
  wrapper: "flex items-center space-x-1 text-xs text-[#818384]",
  profilePic: "h-4 w-4 rounded-full",
  profilePicContainer: "flex items-center space-x-1",
  tag: "cursor-pointer text-xs font-semibold text-[#D7DADC] hover:underline",
  postedBy: "flex items-center space-x-1",
};

const info = ({ author, date }) => {
  console.log(date);
  return (
    <div className={style.wrapper}>
      <div className={style.profilePicContainer}>
        <img
          className={style.profilePic}
          src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
      <div className={style.tag}>f/fanikeorapetse</div>
      <div>·</div>
      <div className={style.postedBy}>
        <span>Posted by {author}</span>
        <div>·</div>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default info;
