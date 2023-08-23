import NumberOfPalletsDropDown from "./NumberOfPalletsDropDown";
import OrderNumberInput from "./OrderNumberInput";
import AddStopButton from "./AddStopButton";
import StopNumber from "./StopNumber";
import StoreNameDropDown from "./StoreNameDropDown";
import storeNames from "./storeNames.js";


const CompleteStopGroup = ({
  numberOfStops,
  setNumberOfStops,
  stop,
  setDefinedStops,
  definedStops,
}) => {
  return (
    <>
      <StopNumber
        numberOfStops={numberOfStops}
        setNumberOfStops={setNumberOfStops}
        stop={stop.stopNumber}
        setDefinedStops={setDefinedStops}
        definedStops={definedStops}
      />
      <StoreNameDropDown
        options={storeNames}
        numberOfStops={numberOfStops}
        setNumberOfStops={setNumberOfStops}
        stop={stop}
        setDefinedStops={setDefinedStops}
        definedStops={definedStops}
      />

      <NumberOfPalletsDropDown
        numberOfStops={numberOfStops}
        setNumberOfStops={setNumberOfStops}
        stop={stop}
        setDefinedStops={setDefinedStops}
        definedStops={definedStops}
      />
      <OrderNumberInput
        numberOfStops={numberOfStops}
        setNumberOfStops={setNumberOfStops}
        stop={stop}
        setDefinedStops={setDefinedStops}
        definedStops={definedStops}
      />
      <AddStopButton
        numberOfStops={numberOfStops}
        setNumberOfStops={setNumberOfStops}
        stop={stop}
        setDefinedStops={setDefinedStops}
        definedStops={definedStops}
      />
    </>
  );
};

export default CompleteStopGroup;
