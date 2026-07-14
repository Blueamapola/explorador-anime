import { useState, useEffect } from "react";
import { type Anime, type AnimeFavorito } from "./types/Anime";
import { buscarAnimes } from "./services/api";
import Buscador from "./components/Buscador";
import ListaElementos from "./components/ListaElementos";
import Favoritos from "./components/Favoritos";
import "./App.css";

function App() {
  const [datos, setDatos] = useState<Anime[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [textoBusqueda, setTextoBusqueda] = useState("");

  const [favoritos, setFavoritos] = useState<AnimeFavorito[]>(() => {
    const guardados = localStorage.getItem("favoritos");
    if (guardados) {
      return JSON.parse(guardados);
    }
    return [];
  });

  useEffect(() => {
    async function cargarDatos() {
      try {
        setCargando(true);
        setError("");
        const resultado = await buscarAnimes(textoBusqueda);
        setDatos(resultado);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error inesperado al cargar los datos"
        );
      } finally {
        setCargando(false);
      }
    }

    cargarDatos();
  }, [textoBusqueda]);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  function agregarFavorito(anime: Anime) {
    const yaExiste = favoritos.some((f) => f.id === anime.id);
    if (yaExiste) {
      return;
    }
    const nuevoFavorito: AnimeFavorito = {
      ...anime,
      nota: "",
      estadoPersonal: "Pendiente",
    };
    setFavoritos([...favoritos, nuevoFavorito]);
  }

  function eliminarFavorito(id: number) {
    setFavoritos(favoritos.filter((f) => f.id !== id));
  }

  function actualizarFavorito(id: number, cambios: Partial<AnimeFavorito>) {
    setFavoritos(
      favoritos.map((f) => (f.id === id ? { ...f, ...cambios } : f))
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Explorador de Anime</h1>
        <p>Busca, descubre y guarda tus animes favoritos</p>
      </header>

      <div className="contenedor">
        <div className="columna-principal">
          <Buscador texto={textoBusqueda} onBuscar={setTextoBusqueda} />

          {cargando && <p className="mensaje-carga">Cargando animes...</p>}

          {error && (
            <div className="mensaje-error">
              <p>{error}</p>
              <button onClick={() => setTextoBusqueda(textoBusqueda)}>
                Reintentar
              </button>
            </div>
          )}

          {!cargando && !error && datos.length === 0 && (
            <p className="mensaje-vacio">No se encontraron resultados.</p>
          )}

          {!cargando && !error && datos.length > 0 && (
            <ListaElementos animes={datos} agregarFavorito={agregarFavorito} />
          )}
        </div>

        <Favoritos
          favoritos={favoritos}
          eliminarFavorito={eliminarFavorito}
          actualizarFavorito={actualizarFavorito}
        />
      </div>
    </div>
  );
}

export default App;