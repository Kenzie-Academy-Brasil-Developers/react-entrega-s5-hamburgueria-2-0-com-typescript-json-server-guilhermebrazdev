import { useContext } from "react";
import { BurguerContext } from "../../Providers/Burguers";
import { CartContext } from "../../Providers/Cart";
import Button from "../Button";

import { Container, SingleBurguer } from "./style";

const BurguerBox = () => {
  const { burguers } = useContext(BurguerContext);
  const { addToCart } = useContext(CartContext);

  return (
    <Container>
      {burguers && (
        <div>
          {burguers.map((burguer, index) => (
            <SingleBurguer key={index}>
              <section>
                <img src={burguer.img} alt="Burguer" />
              </section>
              <div>
                <h1>{burguer.name}</h1>
                <p>{burguer.category}</p>
                <h4>R$ {burguer.price}</h4>
                <Button Click={() => addToCart(burguer)}>Comprar</Button>
              </div>
            </SingleBurguer>
          ))}
        </div>
      )}
    </Container>
  );
};

export default BurguerBox;
