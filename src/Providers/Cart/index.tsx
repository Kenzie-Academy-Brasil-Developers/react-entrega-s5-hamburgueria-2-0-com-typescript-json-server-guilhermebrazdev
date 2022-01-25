import { createContext, useState, ReactNode } from "react";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  img: string;
  previousValue: string;
  currentValue: string;
}

interface CartProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: Product[];
  valor: string;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  CleanCart: () => void;
}

export const CartContext = createContext<CartProviderData>(
  {} as CartProviderData
);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const storageCart = localStorage.getItem("@Hamburgueria_typescript");
    if (storageCart) {
      return JSON.parse(storageCart);
    }
    return [] as Product[];
  });
  localStorage.setItem("@Hamburgueria_typescript", JSON.stringify(cart));

  console.log("cart", cart);

  function addToCart(product: Product) {
    setCart([...cart, product]);
  }

  function removeFromCart(product: Product) {
    const newCart = cart.filter(
      (burguer: Product) => product.name !== burguer.name
    );
    setCart(newCart);
  }

  function CleanCart() {
    setCart([]);
  }

  const valor = cart
    .reduce(
      (previousValue, currentValue) =>
        previousValue + Number(currentValue.price),
      0
    )
    .toFixed(2);

  console.log("valor", valor);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, CleanCart, valor }}
    >
      {children}
    </CartContext.Provider>
  );
};
