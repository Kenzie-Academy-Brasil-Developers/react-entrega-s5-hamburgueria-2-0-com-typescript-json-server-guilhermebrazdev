import { TextField } from "@mui/material";

import Button from "../../Components/Button";

import { Container } from "./style";

function SignUp() {
  return (
    <Container>
      <Container>
        <form>
          <TextField id="outlined-basic" label="Nome" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Senha" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Confirmar Senha"
            variant="outlined"
          />
          <Button type="button" isGray>
            Cadastrar
          </Button>
        </form>
      </Container>
    </Container>
  );
}

export default SignUp;
