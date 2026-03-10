
import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  // 1. States for inputted numbers array and the total sum
  const [inputtedNumbers, setInputtedNumbers] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const calculatedSum = inputtedNumbers.reduce((acc, num) => {
      return acc + num;
    }, 0); // Why 0? Because we want to start the sum from 0, if we don't provide this initial value, the first element of the array will be used as the initial value and the summation will start from the second element, which is not what we want in this case.
    setTotalSum(calculatedSum);
  }, [inputtedNumbers]);
  
  // 2. Function to handle input change and update the inputted numbers array
  const handleInputChange = (event) => {
    const currentInputValue = event.target.value;
    if(currentInputValue === "") {
      setInputtedNumbers([]);
      return;
    }

    const parsedNumber = parseInt(currentInputValue, 10);

    if(!isNaN(parsedNumber)) {
      setInputtedNumbers([...inputtedNumbers, parsedNumber]);
    }
  };


  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number"
      onChange={handleInputChange}
      />
      <p>Sum: {totalSum}</p>
    </div>
  )
}

export default App
