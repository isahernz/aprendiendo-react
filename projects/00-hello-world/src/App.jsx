import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

const users = [
  {
    name: "Brandon Hernández",
    username: "isahernz",
    isFollowing: true,
  },

  {
    name: "Laravel",
    username: "laravel",
    isFollowing: false,
  },

  {
    name: "Astro",
    username: "withastro",
    isFollowing: true,
  },
];

export const App = () => {
  return (
    <section className="App">
      {users.map(({ name, username, isFollowing }) => (
        <TwitterFollowCard
          key={username}
          username={username}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
};
