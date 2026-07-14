import { type AnimeFavorito } from "../types/Anime";

type Props = {
  favoritos: AnimeFavorito[];
  eliminarFavorito: (id: number) => void;
  actualizarFavorito: (id: number, cambios: Partial<AnimeFavorito>) => void;
};

function Favoritos({ favoritos, eliminarFavorito, actualizarFavorito }: Props) {
  return (
    <div className="panel-favoritos">
      <div className="panel-header">
        Mi colección
        <span className="total">Total: {favoritos.length}</span>
      </div>

      {favoritos.length === 0 && (
        <p className="mensaje-vacio">Aún no agregas animes a tu colección.</p>
      )}

      <div className="lista-favoritos">
        {favoritos.map((favorito) => (
          <div key={favorito.id} className="card-favorito">
            {favorito.imagen ? (
              <img className="card-img" src={favorito.imagen} alt={favorito.titulo} />
            ) : (
              <div className="card-img card-img-vacia">Sin imagen</div>
            )}

            <div className="card-info">
              <h3>{favorito.titulo}</h3>

              <label htmlFor={`estado-${favorito.id}`}>Estado personal</label>
              <select
                id={`estado-${favorito.id}`}
                value={favorito.estadoPersonal}
                onChange={(e) =>
                  actualizarFavorito(favorito.id, {
                    estadoPersonal: e.target.value as AnimeFavorito["estadoPersonal"],
                  })
                }
              >
                <option value="Pendiente">Pendiente</option>
                <option value="Viendo">Viendo</option>
                <option value="Visto">Visto</option>
              </select>

              <label htmlFor={`nota-${favorito.id}`}>Mi nota</label>
              <input
                id={`nota-${favorito.id}`}
                type="text"
                placeholder="Escribe una nota..."
                value={favorito.nota}
                onChange={(e) =>
                  actualizarFavorito(favorito.id, { nota: e.target.value })
                }
              />

              <button
                className="btn-eliminar"
                onClick={() => eliminarFavorito(favorito.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoritos;