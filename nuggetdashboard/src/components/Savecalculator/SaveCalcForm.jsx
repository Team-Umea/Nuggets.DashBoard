import { useState } from "react";
function SaveCalcForm() {
    const calculateFutureValue = (startAmount, monthlyDeposit, years, annualReturn) => {
        const r = annualReturn / 100 / 12; // Månatlig avkastning
        const n = years * 12; // Totala månader
    
        const futureValue = startAmount * Math.pow(1 + r, n) + 
            monthlyDeposit * ((Math.pow(1 + r, n) - 1) / r);
    
        return futureValue;
    };
    const handleStartAmount = (e) => {
        setStartAmount(e.target.value);
 
    };

    const handleMonthlyDeposit = (e)=> {
     setMonthlyDeposit(e.target.value)
    }
    const handleYears = (e)=>{
        setYears(e.target.value)

    }

    const [startAmount ,setStartAmount] = useState(10000)
    const [monthlyDeposit, setMonthlyDeposit] = useState(1000)
    const [years, setYears] = useState(1)
    const annualReturn = 7;
    // futurevalue ska ligga i global state 
    const indexFutureValue = calculateFutureValue(startAmount, monthlyDeposit, years, annualReturn);
   

    return (
        <form>
            
        <div>
            <h3>Global Index Saving Calculator</h3>
            <h5>{Math.round(indexFutureValue)}$</h5>
        </div>
        <div>
            <label htmlFor="startAmount">Start Value:</label>
            <input  type="number" id="startAmount" name="startAmount" onChange={handleStartAmount} value={startAmount}  required />
        </div>
        <div>
            <label htmlFor="monthlyDeposit">Montly Savings:</label>
            <input  type="number" id="monthlyDeposit" name="monthlyDeposit" onChange={handleMonthlyDeposit} value={monthlyDeposit} required />
        </div>
        <div>
            <label htmlFor="savingYears">Saving Years:</label>
            <input  type="number" id="savingYears" name="savingYears" onChange={handleYears} value={years} required />
        </div>

     
    </form> 
      );
}

export default SaveCalcForm;