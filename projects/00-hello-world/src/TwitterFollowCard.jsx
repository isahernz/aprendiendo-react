import { useState } from "react";
export const TwitterFollowCard = (props) => {
  const [isFollowing, setIsFollowing] = useState(props.initialIsFollowing);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const text = isFollowing ? "Following" : "Follow";

  const buttonClass = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${props.username}`}
          alt={`El avatar de ${props.name}`}
        />
        <div className="tw-followCard-info">
          <strong>{props.children}</strong>
          <span className="tw-followCard-infoUserName">@{props.username}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClass} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-unFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
};
