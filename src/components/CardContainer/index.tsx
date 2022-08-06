import "./cardContainer.css";
import Tabs from "../Tabs";
import { useState, useEffect, useCallback } from "react";
import { getTrendingMovies } from "../../api";

const CardContainer = () => {
  const [selectedTabValue, setSelectedTabValue] = useState(0);
  const [movies, setMovies] = useState([]);

  const handleTabChange = (tabValue: number) => {
    setSelectedTabValue(tabValue);
  };

  const getMovies = useCallback(async () => {
    try {
      const results = await getTrendingMovies();
      const movies = await results.json();
      setMovies(movies.results);
    } catch (err) {
      console.log("err >>>", err);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, []);

  console.log("movies >>", movies);

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
