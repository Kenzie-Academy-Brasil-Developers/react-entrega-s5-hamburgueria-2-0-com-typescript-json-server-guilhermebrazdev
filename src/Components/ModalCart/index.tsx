import { useContext } from "react";
import { BurguerContext } from "../../Providers/Burguers";
import { CartContext } from "../../Providers/Cart";
import Button from "../Button";
import Cart from "../Cart";

import { Container, Modal, Amount } from "./style";

const ModalCart = () => {
  const { goToCart } = useContext(BurguerContext);
  const { CleanCart, cart, valor } = useContext(CartContext);

  return (
    <Container>
      <Modal>
        <header>
          <p>Carrinho de Compras</p>
          <Button Click={goToCart}>x</Button>
        </header>
        <Cart />
        {cart.length > 0 && (
          <Amount>
            <div>
              <h3>Total</h3>
              <p>R$ {valor}</p>
            </div>
            <Button Click={CleanCart}>Remover todos</Button>
          </Amount>
        )}
      </Modal>
    </Container>
  );
};

export default ModalCart;
