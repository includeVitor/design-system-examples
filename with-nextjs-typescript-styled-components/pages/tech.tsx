import { useApi } from "react-martins-component-library";
import { api } from "../services";
import { ApiError, ApiRoutes, Technology } from "../services/types";
import { Container, Main } from "../styles/styles";

const Tech = () => {
  const { data: tech, error } = useApi<Technology[], ApiError>({
    api,
    url: ApiRoutes.tech,
  });

  if (error) {
    return (
      <Container>
        <Main>{error.data}</Main>
      </Container>
    );
  }

  if (!tech) {
    return (
      <Container>
        <Main>...carregando</Main>
      </Container>
    );
  }

  const techList = tech.map((t) => (
    <li key={t.id}>
      {t.id} - {t.name}
    </li>
  ));

  return (
    <Container>
      <Main>
        <ul>{techList}</ul>
      </Main>
    </Container>
  );
};

export default Tech;
