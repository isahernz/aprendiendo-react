export const TwitterFollowCard = () => {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://unavatar.io/isahernz"
          alt="El avatar de isahernz"
        />
        <div className="tw-followCard-info">
          <strong>Isa.jsx</strong>
          <span className="tw-followCard-infoUserName">@_isahernz</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
};
