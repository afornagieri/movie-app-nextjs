import React from "react";

import Image from "next/legacy/image";
import Meta from "@/components/Meta";

import axios from "axios";

import CONSTANTS from "@/config/CONSTANTS";

const Movie = ({ movie }) => {
  return (
    <div className="container max-w-4xl mx-auto pt-6">
      <Meta title={movie.title} />
      <div className="px-3">
        <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          width={1000}
          height={600}
          className="rounded-md"
        />
        <h1 className="font-bold text-xl my-2">{movie.title}</h1>
        <p className="text-gray-600 text-sm mt-4">{movie.overview}</p>
        <p className="mt-5 text-gray-600 text-sm">Genres: <span className="font-bold">{movie.genres.map(genre => genre.name).join(', ')}</span></p>
        <p className="text-gray-600 text-sm">Release date: <span className="font-bold">{movie.release_date}</span></p>
      </div>
    </div>
  );
}

export default Movie;

export async function getStaticProps(context) {
  const { id } = context.params;

  const movie_detail = await axios.get(`${CONSTANTS.BASE_URL_TMDB}/3/movie/${id}?api_key=${process.env.API_KEY_TMDB_v3}&language=en-US&page=1`);
  
  const movie = movie_detail.data;
  
  return {
    props: { movie }
  }
}

export async function getStaticPaths() {
  const popular_movies = await axios.get(`${CONSTANTS.BASE_URL_TMDB}/3/movie/popular?api_key=${process.env.API_KEY_TMDB_v3}&language=en-US&page=1`);

  const populars = popular_movies.data.results;

  const ids = populars.map(popular => popular.id);

  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  }
}