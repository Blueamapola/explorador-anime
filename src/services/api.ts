import { type Anime } from "../types/Anime";

const URL_BASE = "https://kitsu.app/api/edge/anime";

export async function buscarAnimes(busqueda: string): Promise<Anime[]> {
  const url = busqueda
    ? `${URL_BASE}?filter[text]=${encodeURIComponent(busqueda)}&page[limit]=12`
    : `${URL_BASE}?sort=-userCount&page[limit]=12`;

  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error("No fue posible obtener los datos desde la API");
  }

  const data = await respuesta.json();

  const animes: Anime[] = (data.data ?? []).map((item: any) => ({
    id: Number(item.id),
    titulo: item.attributes?.canonicalTitle ?? "Sin título",
    imagen: item.attributes?.posterImage?.small ?? "",
    tipo: item.attributes?.subtype ?? "Desconocido",
    estado: item.attributes?.status ?? "Desconocido",
    puntaje: item.attributes?.averageRating
      ? Number(item.attributes.averageRating)
      : null,
  }));

  return animes;
}