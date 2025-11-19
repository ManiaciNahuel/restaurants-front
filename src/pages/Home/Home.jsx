import Header from "../../components/Header/Header";
import HowTo from "../../components/HowTo/HowTo";
import Tabs from "../../components/Tabs/Tabs";
import CategorySelector from "../../components/CategorySelector/CategorySelector";

import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <HowTo />
      <Tabs />
      <CategorySelector />
    </div>
  );
}
