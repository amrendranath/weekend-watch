import "./movieCard.css";
import ReactStars from "react-star-ratings";

interface IMovie {
  [key: string]: any;
}

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard = (props: MovieCardProps) => {
  const { movie } = props;
  const BASE_URL = "https://image.tmdb.org/t/p/w440_and_h660_face";

  const formatDate = (releaseDate: string) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date(releaseDate);
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  };
  console.log("movie >", movie);
  return (
    <div className="movie-card">
      <img className="poster" src={BASE_URL + movie?.poster_path} alt="poster" />
      <h5 className="poster-title">{movie?.title || movie?.name}</h5>
      <p className="poster-date">{formatDate(movie?.release_date || movie?.first_air_date)}</p>
      <div>
        <ReactStars
          rating={Math.round(movie?.vote_average / 2)}
          numberOfStars={5}
          name="rating"
          starDimension="16px"
          starSpacing="2px"
          starRatedColor="#eccd22"
        />
      </div>
    </div>
  );
};

export default MovieCard;
