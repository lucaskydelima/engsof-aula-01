import { Container } from "react-bootstrap";

import Cabecalho from "./Cabecalho";
import Menu from "./Menu";

export default function Pagina(props) {
  return (
    <Container>
      <Cabecalho titulo={props.titulo} />
      <Menu />
      <Container>{props.children}</Container>
    </Container>
  );
}
