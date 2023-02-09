import Hero from "@/components/Hero";
import PopularMovies from "@/components/PopularMovies";

import CONSTANTS from "@/config/CONSTANTS";

import axios from "axios";

export default function Home({ movies }) {
  return (
    <>
      <div className="bg-gray-700">
        <Hero />
        <PopularMovies movies={movies} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await axios.get(`${CONSTANTS.BASE_URL_TMDB}/3/movie/popular?api_key=${process.env.API_KEY_TMDB_v3}&language=en-US&page=1`);
  const movies = response.data.results;
  return {
    props: { movies }
  }
};