const repositoryName = "unform2"

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repsositorios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Form in React</p>

          <a href="#">Acessar repositoório</a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Form in React</p>

          <a href="#">Acessar repositoório</a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Form in React</p>

          <a href="#">Acessar repositoório</a>
        </li>
      </ul>
    </section>
  );
}
