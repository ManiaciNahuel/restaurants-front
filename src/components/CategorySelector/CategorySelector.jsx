import { useState } from "react";
import "./CategorySelector.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function CategorySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("PROMOS");
  
  const categoriesData = {
    PROMOS: ["Combo Familiar", "2x1 Pizzas", "Happy Hour", "Descuento Estudiantes"],
    BEBIDA: ["Gaseosas", "Jugos Naturales", "Cervezas", "Vinos", "Aguas"],
    COMIDA: ["Pizzas", "Hamburguesas", "Pastas", "Ensaladas", "Carnes"],
    POSTRES: ["Helados", "Tortas", "Flanes", "Frutas", "Mousses"]
  };

  return (
    <div className="categorySelector">
      <button 
        className="categorySelector__btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        CATEGORIAS
        {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
      </button>
      
      {isOpen && (
        <div className="categorySelector__content">
          <div className="categorySelector__tabs">
            {Object.keys(categoriesData).map((tab) => (
              <button
                key={tab}
                className={`categorySelector__tab ${selectedTab === tab ? "active" : ""}`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="categorySelector__categories">
            {categoriesData[selectedTab].map((categoria, index) => (
              <div key={index} className="categoria-item">
                {categoria}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
