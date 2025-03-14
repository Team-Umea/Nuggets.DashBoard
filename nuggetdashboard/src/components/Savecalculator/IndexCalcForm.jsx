import { useState } from "react";
import { useDispatch } from "react-redux";
import { indexGrowth } from "../../store/indexSlice";

function SaveCalcForm() {
  const dispatch = useDispatch();
  const [startAmount, setStartAmount] = useState(10000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(1000);
  const [years, setYears] = useState(1);
  const annualReturn = 7;
  const calculateFutureValue = (
    startAmount,
    monthlyDeposit,
    years,
    annualReturn
  ) => {
    const r = annualReturn / 100 / 12; // Månatlig avkastning
    const n = years * 12; // Totala månader

    const futureValue =
      startAmount * Math.pow(1 + r, n) +
      monthlyDeposit * ((Math.pow(1 + r, n) - 1) / r);

    return futureValue;
  };

  const indexFutureValue = calculateFutureValue(
    startAmount,
    monthlyDeposit,
    years,
    annualReturn
  );
  dispatch(indexGrowth(Math.round(indexFutureValue)));

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center mt-5 mb-5">
      <div className="flex justify-center items-center mb-4">
        <div className=" text-gray-800 text-lg font-bold px-4 py-2 rounded-lg">
          Test our savings calculator
        </div>
      </div>
      <h5 className="text-3xl font-bold text-green-600">
        {" "}
        ${Math.round(indexFutureValue).toLocaleString()}
      </h5>
      <p className="text-gray-500 text-sm mb-4">
        Of which $
        {Math.round(
          indexFutureValue - (startAmount + monthlyDeposit * years * 12)
        ).toLocaleString()}{" "}
        in return
      </p>

      <form className="space-y-4 mt-4">
        <div className="bg-gray-100 p-3 rounded-lg">
          <label className="text-sm font-medium text-gray-700">
            Monthly Saving: ${monthlyDeposit}
          </label>
          <input
            type="range"
            min="100"
            max="1500"
            step="50"
            value={monthlyDeposit}
            onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <label className="text-sm font-medium text-gray-700">
            Starting Amount: ${startAmount}
          </label>
          <input
            type="range"
            min="0"
            max="100000"
            step="500"
            value={startAmount}
            onChange={(e) => setStartAmount(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <label className="text-sm font-medium text-gray-700">
            Saving Time: {years} Years
          </label>
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>
      </form>
      <p className="text-xs text-gray-500 mt-4">
        *We have calculated that you will get an annual increase of 7% per year.
      </p>
    </div>
  );
}

export default SaveCalcForm;
