import { OutlineButton } from "../../../../components/common/Button";
import { ProductType } from "../../../../machine/storeMachine";

interface Props extends ProductType {
  onAdd: (id: number) => void;
}

const Product = ({ id, title, image, price, onAdd }: Props) => {
  return (
    <div className="bg-white dark:bg-slate-700 shadow-md rounded-md p-4 hover:shadow-lg">
      <div className="w-full mb-2 rounded-md overflow-hidden">
        <img
          className="w-full object-cover aspect-square"
          src={image}
          alt="Product"
        />
      </div>

      <div className="flex flex-col">
        <h3
          className="text-xl font-bold mb-4 dark:text-slate-50 truncate"
          title={title}
        >
          {title}
        </h3>

        <div className="flex flex-row justify-between items-center">
          <span className="text-xl dark:text-slate-100">${price}</span>
          <OutlineButton onClick={() => onAdd(id)}>add</OutlineButton>
        </div>
      </div>
    </div>
  );
};

export default Product;
