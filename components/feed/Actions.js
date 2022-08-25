import { AnnotationIcon, GiftIcon, ShareIcon } from "@heroicons/react/outline";

const style = {
  wrapper: "flex items-center space-x-4",
  action: "flex items-center space-x-1",
  icon: "h-4 w-4",
  text: "text-xs text-",
};

const Actions = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.action}>
        <AnnotationIcon className={style.icon} />
        <span className={style.text}>19 Comments</span>
      </div>
      <div className={style.action}>
        <GiftIcon className={style.icon} />
        <span className={style.text}>Awards</span>
      </div>
      <div className={style.action}>
        <ShareIcon className={style.icon} />
        <span className={style.text}>Share</span>
      </div>
    </div>
  );
};

export default Actions;
