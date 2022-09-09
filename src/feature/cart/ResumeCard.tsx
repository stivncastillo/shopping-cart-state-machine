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
    <>
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
            <Button
              disabled={!shoppingCart.length}
              onClick={() => send("CONFIRM")}
            >
              Checkout
            </Button>
            <button
              className="text-indigo-400 text-sm mt-2"
              onClick={() => send("CLEAN")}
            >
              Clear cart
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default ResumeCard;
