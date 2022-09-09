import { useCallback, useEffect, useState } from "react";
import Alert from "../../components/common/Alert";
import { Button } from "../../components/common/Button";
import useWindowSize from "../../hooks/useWindowSize";
import { ShoppingProductType } from "../../machine/storeMachine";
import { parsePrice } from "../../utils/price";
import ResumeItem from "./components/ResumeItem";

interface Props {
  send: any;
  state: any;
}

const ResumeCard = ({ send, state }: Props) => {
  const { width } = useWindowSize();
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const { shoppingCart } = state.context;

  useEffect(() => {
    if (width && width > 768) {
      setShowDetails(true);
    } else {
      setShowDetails(false);
    }
  }, [width]);

  const handleToogleDetails = () => {
    setShowDetails(!showDetails);
  };

  const getTotal = useCallback(() => {
    const totalProducts = shoppingCart.reduce(
      (total: number, product: ShoppingProductType) =>
        total + product.qty * product.price,
      0
    );

    return parsePrice(totalProducts);
  }, [shoppingCart]);

  return (
    <div className="bg-slate-100 p-4 w-full drop-shadow-top md:drop-shadow-none rounded-md sticky md:top-4 bottom-4">
      {!shoppingCart.length ? (
        <Alert>
          Please add products to cart clicking{" "}
          <span className="font-medium">ADD</span> button
        </Alert>
      ) : (
        <>
          <div className="flex flex-row justify-between items-center mb-4">
            <h2 className="text-xl">Resume</h2>

            <button
              onClick={handleToogleDetails}
              className="text-indigo-400 underline block md:hidden text-sm"
            >
              {showDetails ? "hide details" : "show details"}
            </button>
          </div>

          {showDetails && (
            <div className="flex flex-col">
              {shoppingCart.map((product: ShoppingProductType) => {
                return (
                  <ResumeItem
                    key={product.id}
                    name={product.title}
                    qty={product.qty}
                    price={parsePrice(product.price * product.qty)}
                    onRemove={() => {
                      send("REMOVE", { product });
                    }}
                  />
                );
              })}
            </div>
          )}

          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center py-4 mb-2">
              <span className="text-lg font-bold">Total</span>

              <span className="text-lg font-bold">${getTotal()}</span>
            </div>
            <Button disabled={!shoppingCart.length}>Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ResumeCard;
