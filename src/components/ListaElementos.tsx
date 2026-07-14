import { type Anime } from "../types/Anime";
import ElementoCard from "./ElementoCard";

type Props = {
  animes: Anime[];
  agregarFavorito: (anime: Anime) => void;
};

function ListaElementos({ animes, agregarFavorito }: Props) {
  return (
    <div className="lista">
      {animes.map((anime) => (
        <ElementoCard key={anime.id} anime={anime} agregarFavorito={agregarFavorito} />
      ))}
    </div>
  );
}

export default ListaElementos;