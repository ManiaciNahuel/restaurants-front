import { useState } from "react";
import "./CategorySelector.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function CategorySelector({ activeTab, onCategorySelect }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const categoriesData = {
    PROMOS: ["Combo Familiar", "2x1 Pizzas", "Happy Hour", "Descuento Estudiantes"],
    BEBIDA: ["Gaseosas", "Jugos Naturales", "Cervezas", "Vinos", "Aguas"],
    COMIDA: ["Hamburguesas", "Pizzas", "Pastas", "Ensaladas", "Carnes"],
    POSTRES: ["Helados", "Tortas", "Flanes", "Frutas", "Mousses"]
  };

  const currentCategories = categoriesData[activeTab] || [];

  const handleCategoryClick = (categoria) => {
    onCategorySelect(categoria);
    setIsOpen(false); // Cerrar dropdown al seleccionar
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
          <div className="categorySelector__categories">
            {currentCategories.map((categoria, index) => (
              <div 
                key={index} 
                className="categoria-item"
                onClick={() => handleCategoryClick(categoria)}
              >
                {categoria}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
