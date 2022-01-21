import { Container } from "./style";

const Button = ({ children, isGray, type, onClick }) => {
  return (
    <Container isGray={isGray} type={type} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
