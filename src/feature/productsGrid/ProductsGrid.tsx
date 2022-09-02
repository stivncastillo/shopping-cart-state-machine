import { ProductType } from "../../machine/storeMachine";
import Product from "./components/product/Product";

interface Props {
  products: Array<ProductType>;
}
const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Product
          key={product.id}
          onAdd={(id) => console.log("product", id)}
          {...product}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
