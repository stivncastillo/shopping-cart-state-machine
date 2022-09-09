import React, { useCallback } from "react";
import Alert from "../../components/common/Alert";
import { Button } from "../../components/common/Button";
import Spinner from "../../components/common/Spinner";
import { ShoppingProductType } from "../../machine/storeMachine";
import { parsePrice } from "../../utils/price";
import ResumeItem from "./components/ResumeItem";

interface Props {
  send: any;
  state: any;
}

const SummaryCard = ({ state, send }: Props) => {
  const { shoppingCart, user, loadingPurchase } = state.context;

  const getTotal = useCallback(() => {
    const totalProducts = shoppingCart.reduce(
      (total: number, product: ShoppingProductType) =>
        total + product.qty * product.price,
      0
    );

    return parsePrice(totalProducts);
  }, [shoppingCart]);

  return (
    <>
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="text-xl">Summary</h2>
      </div>

      {loadingPurchase ? (
        <Spinner className="flex flex-row justify-center" />
      ) : (
        <>
          <div className="flex flex-col">
            {shoppingCart.map((product: ShoppingProductType) => {
              return (
                <ResumeItem
                  key={product.id}
                  name={product.title}
                  qty={product.qty}
                  price={parsePrice(product.price * product.qty)}
                  readonly
                />
              );
            })}

            <div className="flex flex-row justify-between items-center py-4 mb-2">
              <span className="text-lg font-bold">Total</span>

              <span className="text-lg font-bold">${getTotal()}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <Alert>
              Dear <span className="font-bold">{user.name}</span> your purchase
              was successful, we send a message to your email (
              <span className="font-bold">{user.email}</span>) with the details
              of the purchase. Thank you.
            </Alert>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center py-4 mb-2">
              <span className="text-lg font-bold">Total</span>

              <span className="text-lg font-bold">${getTotal()}</span>
            </div>
            <Button
              disabled={!shoppingCart.length}
              onClick={() => send("DONE")}
            >
              New Purchase
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default SummaryCard;
