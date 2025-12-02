import { useState } from "react";
import Header from "../../components/Header/Header";
import HowTo from "../../components/HowTo/HowTo";
import Tabs from "../../components/Tabs/Tabs";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
import ProductList from "../../components/ProductList/ProductList";

import "./Home.scss";

export default function Home() {
  const [activeTab, setActiveTab] = useState("PROMOS");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="home">
      <Header />
      <HowTo />
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      <CategorySelector 
        activeTab={activeTab} 
        onCategorySelect={handleCategorySelect}
      />
      <ProductList 
        activeTab={activeTab} 
        selectedCategory={selectedCategory}
      />
    </div>
  );
}
