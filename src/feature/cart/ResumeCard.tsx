import { useEffect, useState } from "react";
import { Button } from "../../components/common/Button";
import useWindowSize from "../../hooks/useWindowSize";
import ResumeItem from "./components/ResumeItem";

const ResumeCard = () => {
  const { width } = useWindowSize();
  const [showDetails, setShowDetails] = useState<boolean>(false);

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

  return (
    <div className="bg-slate-100 p-4 w-full drop-shadow-top md:drop-shadow-none rounded-md sticky md:top-4 bottom-4">
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
          <ResumeItem name="Product 1" qty={1} price={10} />
          <ResumeItem name="Product 2" qty={2} price={10} />
          <ResumeItem name="Product 3" qty={5} price={10} />
        </div>
      )}

      <div className="flex flex-col">
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
