import { useState } from "react";

function SaveCalcForm() {
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

  const [startAmount, setStartAmount] = useState(10000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(1000);
  const [years, setYears] = useState(1);
  const annualReturn = 7;
  const indexFutureValue = calculateFutureValue(
    startAmount,
    monthlyDeposit,
    years,
    annualReturn
  );

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Global Index Saving Calculator
      </h3>
      <h5 className="text-2xl font-bold text-green-600">
        {Math.round(indexFutureValue)}$
      </h5>

      <form className="space-y-4 mt-4">
        <div>
          <label
            htmlFor="startAmount"
            className="block text-sm font-medium text-gray-700"
          >
            Start Value:
          </label>
          <input
            type="number"
            id="startAmount"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
            value={startAmount}
            onChange={(e) => setStartAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="monthlyDeposit"
            className="block text-sm font-medium text-gray-700"
          >
            Monthly Savings:
          </label>
          <input
            type="number"
            id="monthlyDeposit"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
            value={monthlyDeposit}
            onChange={(e) => setMonthlyDeposit(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="savingYears"
            className="block text-sm font-medium text-gray-700"
          >
            Saving Years:
          </label>
          <input
            type="number"
            id="savingYears"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );
}

export default SaveCalcForm;
