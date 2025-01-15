import { useState } from "react";

export default function News({ author, description, image, time }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <li>
      <p>
        <strong>{author}</strong>
      </p>
      <p>{description}</p>
      {image && <img src={image} alt="news" />}
      <p className="time">{time}</p>
      <div className="like-container">
        <button onClick={handleLike} className="like-button">
          {liked ? "💙" : "🤍"} {}
        </button>
        <span className="likes-count">{likesCount}</span> {}
      </div>
    </li>
  );
}
