type Props = {
  texto: string;
  onBuscar: (texto: string) => void;
};

function Buscador({ texto, onBuscar }: Props) {
  return (
    <div className="buscador">
      <label htmlFor="input-busqueda">Buscar anime</label>
      <input
        id="input-busqueda"
        type="text"
        placeholder="Ej: Naruto"
        value={texto}
        onChange={(e) => onBuscar(e.target.value)}
      />
    </div>
  );
}

export default Buscador;