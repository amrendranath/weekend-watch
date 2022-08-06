import "./cardContainer.css";
import Tabs from "../Tabs";
import { useState } from "react";

const CardContainer = () => {
  const [selectedTabValue, setSelectedTabValue] = useState(0);

  const handleTabChange = (tabValue: number) => {
    setSelectedTabValue(tabValue);
  };

  return (
    <section className="container py-4">
      <div className="d-flex align-items-center">
        <h3 className="title">What's Popular</h3>
        <Tabs tabs={["Streaming", "On TV"]} selected={selectedTabValue} onClick={handleTabChange} />
      </div>
    </section>
  );
};

export default CardContainer;
