import { useEffect } from "react";
import { Container, Header } from "./components/layout";
import { ProductsGrid } from "./feature/productsGrid";
import { ResumeCard } from "./feature/cart";
import { useMachine } from "@xstate/react";
import storeMachine from "./machine/storeMachine";
import Spinner from "./components/common/Spinner";

function App() {
  const [state, send] = useMachine(storeMachine);
  console.log("👻 ->", state.context);

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
          {state.matches("cart.resume") && (
            <ResumeCard send={send} state={state} />
          )}
        </section>
      </div>
    </Container>
  );
}

export default App;
