export type Anime = {
  id: number;
  titulo: string;
  imagen: string;
  tipo: string;
  estado: string;
  puntaje: number | null;
};

export type AnimeFavorito = Anime & {
  nota: string;
  estadoPersonal: "Pendiente" | "Viendo" | "Visto";
};