import { TextField } from "@mui/material";
import Button from "../../Components/Button";

import { Container } from "./style";

function Login() {
  return (
    <Container>
      <form>
        <TextField id="outlined-basic" label="Nome" variant="outlined" />
        <TextField id="outlined-basic" label="Senha" variant="outlined" />
        <Button type="button">Logar</Button>
      </form>
    </Container>
  );
}

export default Login;
