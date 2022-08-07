import { useState, ChangeEvent, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slider.css";
import { StoreContext } from "../../provider/store";

interface SliderProps {
  images: string[];
}

const Slider = (props: SliderProps) => {
  const { images } = props;
  const { searchMovie } = useContext(StoreContext);

  const [index, setIndex] = useState(0);
  const [searchText, setSearchText] = useState("");

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchText(value);
  };

  return (
    <section className="slider">
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
        {images.map((image, index) => {
          return (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image} alt={`slide-${index}`} />
              <Carousel.Caption className="carousel-caption">
                <h3 className="carousel-title">Welcome to the weekend watch</h3>
                <p className="carousel-desc">Millions of Movies, TV Shoes and many more</p>
                <div className="input-wrapper">
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search for movie, tv shoes, and person"
                    value={searchText}
                    onChange={handleInputChange}
                  />
                  <button className="search-btn" onClick={() => searchMovie(searchText)}>
                    Search
                  </button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Slider;
