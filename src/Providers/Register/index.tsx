import axios from "axios";
import { createContext, ReactNode } from "react";
import { useHistory } from "react-router-dom";

interface RegisterData {
  email: string;
  password: string;
}

interface LoginProps {
  children: ReactNode;
}

interface RegisterProviderData {
  Register: (data: RegisterData) => void;
}

export const RegisterContext = createContext({} as RegisterProviderData);

export const RegisterProvider = ({ children }: LoginProps) => {
  const history = useHistory();

  function Register(data: RegisterData) {
    axios
      .post(`https://fake-api-json-serve.herokuapp.com/register`, data)
      .then((response) => {
        console.log("response", response);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <RegisterContext.Provider value={{ Register }}>
      {children}
    </RegisterContext.Provider>
  );
};
