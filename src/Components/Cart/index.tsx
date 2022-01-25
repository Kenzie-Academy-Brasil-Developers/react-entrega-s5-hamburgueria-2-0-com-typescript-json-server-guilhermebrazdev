import { useContext } from "react";

import { CartContext } from "../../Providers/Cart";
import Button from "../Button";

import { Container, Empty, SingleProduct } from "./style";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Container>
      {cart.length > 0 ? (
        <div>
          {cart.map((product, index) => (
            <SingleProduct key={index}>
              <div>
                <img src={product.img} alt="Burguer" />
                <div>
                  <h1>{product.name}</h1>
                  <p>contador</p>
                </div>
              </div>
              <Button Click={() => removeFromCart(product)}>x</Button>
              {/* <button onCLick={()=>removeFromCart(product)} ></button> */}
            </SingleProduct>
          ))}
        </div>
      ) : (
        <Empty>
          <div>
            <h1>Seu carrinho está vazio</h1>
            <p>Adicione itens</p>
          </div>
        </Empty>
      )}
    </Container>
  );
}

export default Cart;
