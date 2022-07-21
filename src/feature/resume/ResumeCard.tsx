import { useEffect, useState } from "react";
import { Button } from "../../components/common/Button";
import useWindowSize from "../../hooks/useWindowSize";

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
    <div className="bg-slate-100 p-4 w-full rounded-md sticky md:top-4 bottom-4">
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
          <div className="flex flex-row justify-between items-center py-4 border-b border-b-slate-200">
            <span className="text-sm">Product Name (x2)</span>

            <span className="text-md font-semibold">$1800</span>
          </div>
          <div className="flex flex-row justify-between items-center py-4 border-b border-b-slate-200">
            <span className="text-sm">Product Name (x2)</span>

            <span className="text-md font-semibold">$1800</span>
          </div>
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
