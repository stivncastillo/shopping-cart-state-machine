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
export interface ShoppingProductType extends ProductType{
  qty: number;
}
interface StoreContext {
  products: Array<ProductType>;
  productsLoading: boolean;
  error: string;
  shoppingCart: Array<ShoppingProductType>
}

const storeMachine = createMachine<StoreContext>(
  {
    id: "storeMachine",
    type: "parallel",
    context: {
      products: [],
      productsLoading: true,
      error: "",
      shoppingCart: []
    },
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
                target: 'failure',
                actions: 'assingError'
              }
            },
          },
          success: {},
          failure: {}
        },
      },
      cart: {
        initial: "initial",
        states: {
          initial: {
            on: {
              START: {
                target: "resume",
              },
            },
          },
          resume: {
            on: {
              CONFIRM: {
                target: "checkout",
              },
              CLEAN: {
                target: "initial",
              },
              ADD: {
                target: "resume",
                actions: assign({
                  shoppingCart: (context, event) => {
                    const isAdded = context.shoppingCart.find(product => product.id === event.product.id);
                    if (!Boolean(isAdded)) {
                      return [...context.shoppingCart, {...event.product, qty: 1}]
                    }
                    return context.shoppingCart.map(product => {
                      if(product.id === event.product.id) {
                        return {...product, qty: product.qty + 1}
                      }

                      return product;
                    })
                  }
                }),
              },
              REMOVE: {
                target: "resume",
                actions: assign({
                  shoppingCart: (context, event) => (context.shoppingCart.filter(product => product.id !== event.product.id))
                }),
              },
            },
          },
          checkout: {
            on: {
              DONE: {
                target: "initial",
              },
            },
          },
        }
      },
    },
  },
  {
    services: {
      fetchProducts,
    },
    actions: {
      assignProducts: assign({
        products: (context, event: any) => event.data.data,
        productsLoading: (context, event: any) => false,
      }),
      assingError: assign({
        error: (context, event: any) => "Ocurrió un error",
      }),
    },
  }
);

export default storeMachine;
