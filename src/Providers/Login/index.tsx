import axios from "axios";
import { createContext, useContext, ReactNode } from "react";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../Auth";

interface LoginData {
  email: string;
  password: string;
}

interface LoginProps {
  children: ReactNode;
}

interface LoginProviderData {
  goToRegister: () => void;
  Login: (data: LoginData) => void;
}

export const LoginContext = createContext<LoginProviderData>(
  {} as LoginProviderData
);

export const LoginProvider = ({ children }: LoginProps) => {
  const { setAccess } = useContext(AuthContext);
  const history = useHistory();

  function goToRegister() {
    history.push("/register");
  }

  function Login(data: LoginData) {
    axios
      .post(`https://fake-api-json-serve.herokuapp.com/login`, data)
      .then((response) => {
        console.log(response);
        localStorage.setItem(
          "@Hamburgueria_typescript/token",
          JSON.stringify(response.data.accessToken)
        );
        setAccess();
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <LoginContext.Provider value={{ goToRegister, Login }}>
      {children}
    </LoginContext.Provider>
  );
};
