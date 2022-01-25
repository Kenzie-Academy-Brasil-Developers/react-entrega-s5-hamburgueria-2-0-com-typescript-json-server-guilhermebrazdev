import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";

import Button from "../../Components/Button";
import { RegisterContext } from "../../Providers/Register";

import { Container } from "./style";

interface onSubmitProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SignUp() {
  const { Register } = useContext(RegisterContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Name required"),
    email: yup.string().required("Email Obrigatório").email("Email Inválido"),
    password: yup.string().required("Password required"),
    confirmPassword: yup
      .string()
      .required("Password confirm")
      .oneOf([yup.ref("password")], "The passwords should be equal"),
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
        <h3>
          <b>Cadastro</b>
          <Link to="/">Retornar para o login</Link>
        </h3>
        <form onSubmit={handleSubmit(Register)}>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            {...register("name")}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            {...register("email")}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            {...register("password")}
          />
          <TextField
            id="outlined-basic"
            label="Confirmar Senha"
            variant="outlined"
            {...register("confirmPassword")}
          />
          <Button type="submit" isGray>
            Cadastrar
          </Button>
        </form>
      </section>
    </Container>
  );
}

export default SignUp;
