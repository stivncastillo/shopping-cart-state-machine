import DATA from "../../config/data.json";
import Product from "./components/product/Product";

const ProductsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {DATA.map((product, index) => (
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
