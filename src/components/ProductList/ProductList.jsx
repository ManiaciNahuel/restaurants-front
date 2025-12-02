import "./ProductList.scss";
import { FaPlus } from "react-icons/fa";

export default function ProductList({ activeTab, selectedCategory }) {
  const productsData = {
    PROMOS: [
      { id: 1, name: "Combo Familiar", description: "2 pizzas grandes + gaseosa 2.5L + postre", price: 15500 },
      { id: 2, name: "2x1 Pizzas", description: "Llevá 2 pizzas medianas al precio de 1", price: 8500 },
      { id: 3, name: "Happy Hour", description: "50% off en bebidas de 18 a 20hs", price: 2500 },
      { id: 4, name: "Descuento Estudiantes", description: "15% off mostrando credencial estudiantil", price: 0 }
    ],
    BEBIDA: [
      { id: 5, name: "Coca Cola", description: "Gaseosa cola 500ml bien fría", price: 1200 },
      { id: 6, name: "Jugo de Naranja", description: "Jugo natural exprimido del día", price: 1500 },
      { id: 7, name: "Cerveza Artesanal", description: "Cerveza rubia tirada 500ml", price: 2200 },
      { id: 8, name: "Vino Tinto", description: "Copa de vino malbec reserva", price: 1800 },
      { id: 9, name: "Agua Mineral", description: "Agua sin gas 500ml", price: 800 }
    ],
    COMIDA: {
      "Hamburguesas": [
        { id: 10, name: "Doble con Queso", description: "Hamburguesa con dos medallones de carne con queso y pan de papa", price: 10500 },
        { id: 11, name: "Triple con Bacon", description: "Hamburguesa con dos medallones de carne con queso y pan de papa", price: 13500 },
        { id: 12, name: "Campeón con Cebolla", description: "Hamburguesa con dos medallones de carne con queso y pan de papa", price: 11200 }
      ],
      "Pizzas": [
        { id: 13, name: "Margherita", description: "Salsa de tomate, mozzarella y albahaca fresca", price: 8500 },
        { id: 14, name: "Napolitana", description: "Salsa de tomate, mozzarella, tomate y orégano", price: 9200 },
        { id: 15, name: "Fugazzeta", description: "Mozzarella, cebolla y orégano", price: 9800 }
      ],
      "Pastas": [
        { id: 16, name: "Ñoquis con Salsa", description: "Ñoquis caseros con salsa de tomate", price: 7500 },
        { id: 17, name: "Ravioles de Ricota", description: "Ravioles frescos rellenos de ricota", price: 8200 },
        { id: 18, name: "Lasaña de Carne", description: "Lasaña casera con carne y bechamel", price: 9500 }
      ],
      "Ensaladas": [
        { id: 19, name: "César", description: "Lechuga, pollo grillado, crutones y aderezo césar", price: 6500 },
        { id: 20, name: "Mixta", description: "Lechuga, tomate, cebolla, zanahoria y huevo", price: 5200 },
        { id: 21, name: "Caprese", description: "Tomate, mozzarella, albahaca y aceite de oliva", price: 6800 }
      ],
      "Carnes": [
        { id: 22, name: "Bife de Chorizo", description: "Bife de chorizo a la parrilla con guarnición", price: 12500 },
        { id: 23, name: "Milanesa Napolitana", description: "Milanesa con jamón, queso y salsa", price: 10200 },
        { id: 24, name: "Pollo Grillado", description: "Pechuga de pollo grillada con vegetales", price: 9800 }
      ]
    },
    POSTRES: [
      { id: 25, name: "Tiramisu", description: "Clásico tiramisu italiano con café", price: 4500 },
      { id: 26, name: "Flan Casero", description: "Flan de vainilla con dulce de leche", price: 3200 },
      { id: 27, name: "Helado Artesanal", description: "2 bochas de helado a elección", price: 2800 },
      { id: 28, name: "Torta de Chocolate", description: "Porción de torta húmeda de chocolate", price: 4200 }
    ]
  };

  const getProductsToShow = () => {
    const tabProducts = productsData[activeTab];
    
    if (activeTab === "COMIDA" && typeof tabProducts === "object") {
      if (selectedCategory && tabProducts[selectedCategory]) {
        return tabProducts[selectedCategory];
      } else {
        // Mostrar todas las categorías de comida
        return Object.values(tabProducts).flat();
      }
    }
    
    return tabProducts || [];
  };

  const products = getProductsToShow();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="product-list">
      {selectedCategory && (
        <h3 className="product-list__category-title">{selectedCategory}</h3>
      )}
      
      <div className="product-list__items">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-item__info">
              <h4 className="product-item__name">{product.name}</h4>
              <p className="product-item__description">{product.description}
              <span className="product-item__price">{formatPrice(product.price)}</span></p>
            </div>
            <div className="product-item__right">
              <button className="product-item__add">
                <FaPlus size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}