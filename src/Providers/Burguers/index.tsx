import { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  img: string;
  previousValue: string;
  currentValue: string;
}

interface BurguerProps {
  children: ReactNode;
}

interface BurguerProviderData {
  burguers: Product[];
  goToCart: () => void;
  Logout: () => void;
  cartModal: boolean;
}

export const BurguerContext = createContext<BurguerProviderData>(
  {} as BurguerProviderData
);

export const BurguerProvider = ({ children }: BurguerProps) => {
  const [burguers, setBurguers] = useState<Product[]>([]);
  const [cartModal, setCartModal] = useState(false);

  const history = useHistory();

  function goToCart() {
    setCartModal(!cartModal);
  }

  function Logout() {
    localStorage.clear();
    history.push("/");
  }

  function callBurguers() {
    axios
      .get(`https://fake-api-json-serve.herokuapp.com/burguers`)
      .then((response) => {
        setBurguers(response.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    callBurguers();
  }, []);

  return (
    <BurguerContext.Provider value={{ burguers, goToCart, cartModal, Logout }}>
      {children}
    </BurguerContext.Provider>
  );
};
