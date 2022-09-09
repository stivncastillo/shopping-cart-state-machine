import { useEffect } from "react";
import { Container, Header } from "./components/layout";
import { ProductsGrid } from "./feature/productsGrid";
import { ResumeCard } from "./feature/cart";
import { useMachine } from "@xstate/react";
import storeMachine from "./machine/storeMachine";
import Spinner from "./components/common/Spinner";
import CheckoutCart from "./feature/cart/CheckoutCart";
import SummaryCard from "./feature/cart/SummaryCard";

function App() {
  const [state, send] = useMachine(storeMachine);

  const { products, productsLoading } = state.context;

  useEffect(() => {
    if (products.length > 0) {
      send("START");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <Container>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-layout gap-4 md:bg-red">
        <section className="w-full">
          {productsLoading ? (
            <Spinner className="flex flex-row justify-center" />
          ) : (
            <ProductsGrid send={send} products={products} />
          )}
        </section>
        <section className="md:relative fixed left-0 right-0 bottom-0">
          <div className="bg-slate-100 p-4 w-full drop-shadow-top md:drop-shadow-none rounded-md sticky md:top-4 bottom-4">
            {state.matches("cart.resume") && (
              <ResumeCard send={send} state={state} />
            )}
            {state.matches("cart.checkout") && (
              <CheckoutCart send={send} state={state} />
            )}
            {state.matches("cart.summary") && (
              <SummaryCard send={send} state={state} />
            )}
          </div>
        </section>
      </div>
    </Container>
  );
}

export default App;
