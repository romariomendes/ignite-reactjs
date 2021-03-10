import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

const repository = {
  name: "Roario",
  description: "Ola Mundo",
  link: "https://www.google.com/",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repsositorios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
