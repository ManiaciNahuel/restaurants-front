import "./Tabs.scss";

export default function Tabs({ activeTab, onTabChange }) {
  const tabs = ["PROMOS", "BEBIDA", "COMIDA", "POSTRES"];

  return (
    <div className="tabs">
      {tabs.map((item) => (
        <button
          key={item}
          className={`tabs__item ${activeTab === item ? "active" : ""}`}
          onClick={() => onTabChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
