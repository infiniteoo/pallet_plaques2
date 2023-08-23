import React, {useState} from 'react'

const OrderNumberInput = ({
  stop,
  definedStops,
  setDefinedStops,
  numberOfStops,
  setNumberOfStops,
}) => {
  console.log("stop", stop)
  const stopIndex = stop.stopNumber - 1; // Assuming stops are 1-indexed

  /* const [selected, setSelected] = useState(palletCount[3]); */
  const [enteredOrderNumber, setEnteredOrderNumber] = useState('');

  /* update setEnteredOrderNumber with the event */
  
  const handleOrderNumberChange = (event) => {
    const selectedOrderNumber = event.target.value;
    
    console.log('selectedOrderNumber', selectedOrderNumber);
    
    setEnteredOrderNumber(selectedOrderNumber);
  
    setDefinedStops((prevDefinedStops) => {
      const updatedStops = [...prevDefinedStops];
      updatedStops[stopIndex] = {
        ...updatedStops[stopIndex],
        orderNumber: selectedOrderNumber
      };
      return updatedStops;
    });
  };
  
  return (

<div>
  <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Order #</label>
  <div className="relative  rounded-md shadow-sm">
    
    <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter Order Number"
    onChange = {handleOrderNumberChange}
    value={enteredOrderNumber}
    />
    
  </div>
</div>

  )
}

export default OrderNumberInput