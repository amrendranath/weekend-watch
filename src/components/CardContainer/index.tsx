import "./cardContainer.css";
import Tabs from "../Tabs";
import { useState } from "react";
import { StoreContext } from "../../provider/store";
import MovieCard from "../MovieCard";
import Slider from "react-slick";
import { useContext } from "react";

interface IMovie {
  [key: string]: any;
}

const CardContainer = () => {
  const { movies } = useContext(StoreContext);
  const [selectedTabValue, setSelectedTabValue] = useState(0);

  const handleTabChange = (tabValue: number) => {
    setSelectedTabValue(tabValue);
  };

  const settings = {
    className: "slider-custom",
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <section className="container card_wrapper">
      <div className="d-flex align-items-center">
        <h3 className="title">What's Popular</h3>
        <Tabs tabs={["Streaming", "On TV"]} selected={selectedTabValue} onClick={handleTabChange} />
      </div>
      <div className="slider-wrapper">
        <Slider {...settings}>
          {movies?.map((movie: IMovie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CardContainer;
