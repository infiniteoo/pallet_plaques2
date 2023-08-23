import CompleteStopGroup from "./components/CompleteStopGroup.jsx";
import SubmitButton from "./components/SubmitButton.jsx";
import ViewOnGitHub from "./components/ViewOnGitHub.jsx";
import PasteBox from "./components/PasteBox";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [numberOfStops, setNumberOfStops] = useState(1);
  const [definedStops, setDefinedStops] = useState([
    {
      stopNumber: 1,
      storeName: "",
      numberOfPallets: 0,
      orderNumber: "",
    },
  ]);

  useEffect(() => {
    if (numberOfStops > definedStops.length) {
      const newStopsCount = numberOfStops - definedStops.length;
      let newStops = [];

      for (let i = 1; i <= newStopsCount; i++) {
        const newStop = {
          stopNumber: definedStops.length + i,
          storeName: "",
          numberOfPallets: 0,
          orderNumber: "",
        };
        newStops.push(newStop);
      }

      setDefinedStops((prevDefinedStops) => [...prevDefinedStops, ...newStops]);
    }
  }, [numberOfStops]);

  useEffect(() => {
    console.log("definedStops after update", definedStops);
    console.log("numberOfStops after update", numberOfStops);
  }, [definedStops]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        {/* Stylish Header */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={"/GXO_logo.png"}
            alt="GXO Logo"
            className="w-32 h-auto mb-2"
          />
          <h1 className="text-3xl font-semibold text-gray-800 tracking-wider">
            Pallet Plaques
          </h1>
        </div>

        {/* Map each stop to a new row */}
        {definedStops.map((stop) => (
          <div
            key={stop.stopNumber}
            className="flex flex-row items-center justify-between w-full"
          >
            <CompleteStopGroup
              stop={stop}
              numberOfStops={numberOfStops}
              setNumberOfStops={setNumberOfStops}
              definedStops={definedStops}
              setDefinedStops={setDefinedStops}
            />
          </div>
        ))}
        <SubmitButton definedStops={definedStops} />

        <PasteBox
              
              numberOfStops={numberOfStops}
              setNumberOfStops={setNumberOfStops}
              definedStops={definedStops}
              setDefinedStops={setDefinedStops}
            />
       
        <ViewOnGitHub />
       
      </div>
    </main>
  );;
}

export default App;
