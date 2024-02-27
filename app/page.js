import LikeButton from "./like-button";

function Header({ title }) {
  return <h1>{title}</h1>;
}

export default function HomePage() {
  const names = ["Arnold SchwarzeNegger", "Pamela Anderson", "Jackie Chan"];

  return (
    <div>
      {/* Nesting the header component */}
      <Header title="Develop, Preview and Ship" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
