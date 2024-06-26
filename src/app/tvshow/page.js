import { getTvShows } from "@/src/utils/requests";
import Cardtv from "../components/CardTV";
import Link from "next/link";
import React from 'react'
import Pagination from "../components/Pagination";

export default async function HomePageTV() {
  const tv_shows = await getTvShows();

  return (
    <div className="container my-3">
      <h1 className="text-white">Séries do Momento</h1>
      <span>{Pagination()}</span>
      <div className="d-flex flex-wrap gap-3">
        {tv_shows.map((tvshow) => {
          return <Cardtv tvshow={tvshow}></Cardtv>;
        })}
      </div>
    </div>
  );
}
