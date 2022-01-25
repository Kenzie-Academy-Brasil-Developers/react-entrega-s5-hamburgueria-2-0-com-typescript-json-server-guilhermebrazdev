import { TextField } from "@mui/material";
import { FiShoppingBag } from "react-icons/fi";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginContext } from "../../Providers/Login";
import Button from "../../Components/Button";

import { Container } from "./style";

interface onSubmitProps {
  email: string;
  password: string;
}

function Login() {
  const { goToRegister, Login } = useContext(LoginContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email("Email Inválido"),
    password: yup.string().required("Password required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<onSubmitProps>({ resolver: yupResolver(formSchema) });

  return (
    <Container>
      <div id="title">
        <h1>Burguer</h1>
        <p>kenzie</p>
      </div>
      <section>
        <div>
          <FiShoppingBag />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os
          <b> melhores</b> ingredientes.
        </p>
      </section>
      <div id="formBox">
        <b>Login</b>
        <form onSubmit={handleSubmit(Login)}>
          <TextField
            // id="outlined-basic"
            label="Email"
            variant="outlined"
            {...register("email")}
            type="email"
          />
          <TextField
            // id="outlined-basic"
            label="Senha"
            variant="outlined"
            {...register("password")}
            type="password"
          />
          <Button type="submit">Logar</Button>
          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
          <Button type="button" isGray Click={goToRegister}>
            Cadastro
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Login;
