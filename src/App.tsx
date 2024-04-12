import SwitchList from "./components/SwitchList";
import SwitchFilter from "./components/SwitchFilter";
import SwitchForm from "./components/SwitchForm";
import { useState } from "react";

function App() {
  const [switches, setSwitches] = useState([
    { id: 1, name: "Owlab Neon", amount: 1, category: "Linear" },
    { id: 2, name: "Gazzew Boba U4T", amount: 1, category: "Tactile" },
    { id: 3, name: "Kailh Box Jade", amount: 1, category: "Clicky" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const selectedSwitches = selectedCategory
    ? switches.filter((e) => e.category === selectedCategory)
    : switches;

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>

      <SwitchForm />

      <SwitchFilter />

      <SwitchList
        switches={selectedSwitches}
        onDelete={(id) => setSwitches(switches.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
