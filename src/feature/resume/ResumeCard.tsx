import { Button } from "../../components/common/Button";

type Props = {};

const ResumeCard = (props: Props) => {
  return (
    <div className="bg-slate-100 p-4 w-full rounded-md sticky top-4 sm:bottom-4">
      <h2 className="text-xl mb-4">Resume</h2>

      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center py-4 border-b border-b-slate-200">
          <span className="text-sm">Product Name (x2)</span>

          <span className="text-md font-semibold">$1800</span>
        </div>
        <div className="flex flex-row justify-between items-center py-4 border-b border-b-slate-200">
          <span className="text-sm">Product Name (x2)</span>

          <span className="text-md font-semibold">$1800</span>
        </div>

        <div className="flex flex-row justify-between items-center py-4 mb-2">
          <span className="text-lg font-bold">Total</span>

          <span className="text-lg font-bold">$3600</span>
        </div>

        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default ResumeCard;
