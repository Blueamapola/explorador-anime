import { type Anime } from "../types/Anime";

type Props = {
  anime: Anime;
  agregarFavorito: (anime: Anime) => void;
};

function ElementoCard({ anime, agregarFavorito }: Props) {
  return (
    <div className="card">
      {anime.imagen ? (
        <img className="card-img" src={anime.imagen} alt={anime.titulo} />
      ) : (
        <div className="card-img card-img-vacia">Sin imagen</div>
      )}
      <div className="card-info">
        <h3>{anime.titulo}</h3>
        <span className="badge">{anime.tipo}</span>
        <p>Estado: {anime.estado}</p>
        <p>Puntaje: {anime.puntaje !== null ? anime.puntaje : "Sin puntaje"}</p>
        <button className="btn-agregar-card" onClick={() => agregarFavorito(anime)}>
          Agregar a favoritos
        </button>
      </div>
    </div>
  );
}

export default ElementoCard;