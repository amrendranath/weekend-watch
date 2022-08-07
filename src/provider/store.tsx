import React, { createContext, useState, useEffect, useCallback } from "react";
import { getTrendingMovies, getSearchMovies } from "../api/index";

interface IMovie {
  [key: string]: any;
}

interface IContextInitialValue {
  movies: IMovie;
  searchMovie: (text: string) => void;
}

export const StoreContext = createContext<IContextInitialValue>({} as IContextInitialValue);

export const StoreProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [movies, setMovies] = useState<IMovie>([] as IMovie[]);

  const getMovies = useCallback(async () => {
    try {
      const resp = await getTrendingMovies();
      setMovies(resp?.data?.results);
    } catch (err) {
      console.log("err >>>", err);
    }
  }, []);

  const searchMovie = async (searchText: string) => {
    try {
      const resp = await getSearchMovies(searchText);
      setMovies(resp?.data?.results);
    } catch (err) {
      console.log("err >>>", err);
    }
  };

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return <StoreContext.Provider value={{ movies, searchMovie }}>{children}</StoreContext.Provider>;
};
