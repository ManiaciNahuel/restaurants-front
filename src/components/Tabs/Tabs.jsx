import "./Tabs.scss";

export default function Tabs() {
  const tabs = ["PROMOS", "BEBIDA", "COMIDA", "POSTRES"];

  return (
    <div className="tabs">
      {tabs.map((t) => (
        <button key={t}>{t}</button>
      ))}
    </div>
  );
}
