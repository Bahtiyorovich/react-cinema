import MovieListItem from "../movies-item/MovieListItem";
import { useContext } from "react";
import { Context } from "../../context";
import { filterHandler, searchHandler } from "../../utilities/data";
import "./movies-list.css";

const MoviesList = () => {
  const { state } = useContext(Context);

  const data = filterHandler(
    searchHandler(state.data, state.term),
    state.filter
  );

  return (
    <ul className="movie-list">
      {data.map((item) => {
        return <MovieListItem {...item} key={item.id} />;
      })}
    </ul>
  );
};

export default MoviesList;
