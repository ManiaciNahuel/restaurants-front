import { useState } from "react";
import "./Tabs.scss";

export default function Tabs() {
  const tabs = ["PROMOS", "BEBIDA", "COMIDA", "POSTRES"];
  const [active, setActive] = useState("PROMOS");

  return (
    <div className="tabs">
      {tabs.map((item) => (
        <button
          key={item}
          className={`tabs__item ${active === item ? "active" : ""}`}
          onClick={() => setActive(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
