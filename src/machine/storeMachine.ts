import { createMachine, assign } from "xstate";
import { fetchProducts } from "../utils/api";

type Rating = {
  rate: number,
  count: number
}
export interface ProductType {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: Rating
}
interface StoreContext {
  products: Array<ProductType>;
  error: string;
}

const storeMachine = createMachine(
  {
    id: "storeMachine",
    type: "parallel",
    context: {
      products: [],
      error: "",
    } as StoreContext,
    states: {
      products: {
        initial: "loadProducts",
        states: {
          loadProducts: {
            invoke: {
              id: "getProducts",
              src: "fetchProducts",
              onDone: {
                target: "success",
                actions: "assignProducts",
              },
              onError: {
                target: 'failure'
              }
            },
          },
          success: {},
          failure: {}
        },
      },
      cart: {},
    },
  },
  {
    services: {
      fetchProducts,
    },
    actions: {
      assignProducts: assign({
        products: (context, event: any) => event.data.data,
      }),
    },
  }
);

export default storeMachine;
