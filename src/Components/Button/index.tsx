import { ReactNode } from "react";
import { Product } from "../../Providers/Cart";

import { Container } from "./style";

interface ButtonProps {
  isGray?: boolean;
  type?: string;
  children: ReactNode;
  Click?: (parameter?: Product) => void;
}

const Button = ({ children, isGray, type, Click }: ButtonProps) => {
  return (
    <Container isGray={isGray} type={type} onClick={Click}>
      {children}
    </Container>
  );
};

export default Button;
