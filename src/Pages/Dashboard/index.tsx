import { useContext } from "react";
import { Redirect } from "react-router-dom";

import BurguerBox from "../../Components/BurguerBox";
import Button from "../../Components/Button";
import ModalCart from "../../Components/ModalCart";
import { BurguerContext } from "../../Providers/Burguers";

import { Container, Title } from "./style";

function Dashboard() {
  const { goToCart, cartModal, Logout } = useContext(BurguerContext);

  if (!localStorage.getItem("@Hamburgueria_typescript/authenticated")) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {cartModal && <ModalCart />}
      <Container>
        <header>
          <Title>
            <h1>Burguer</h1>
            <p>kenzie</p>
          </Title>
          <nav>
            {/* <Button onClick={() => goToCart()}>Pesq</Button> */}
            <Button Click={goToCart}>Cart</Button>
            <Button Click={Logout}>Logout</Button>
          </nav>
        </header>
        <BurguerBox />
      </Container>
    </>
  );
}

export default Dashboard;
