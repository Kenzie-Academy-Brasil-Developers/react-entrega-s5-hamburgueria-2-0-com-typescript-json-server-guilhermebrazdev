import { BurguerProvider } from "./Burguers";
import { CartProvider } from "./Cart";
import { LoginProvider } from "./Login";
import { AuthProvider } from "./Auth";
import { RegisterProvider } from "./Register";
import { ReactNode } from "react";

interface ProvidersProviderData {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProviderData) => {
  return (
    <BurguerProvider>
      <AuthProvider>
        <RegisterProvider>
          <LoginProvider>
            <CartProvider>{children}</CartProvider>
          </LoginProvider>
        </RegisterProvider>
      </AuthProvider>
    </BurguerProvider>
  );
};
