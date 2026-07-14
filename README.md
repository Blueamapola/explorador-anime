# Explorador de Anime

SPA desarrollada con React + TypeScript que consume la API pública de Kitsu para buscar animes, mostrarlos en tarjetas y guardarlos en una colección personal persistida con Local Storage.

## API utilizada

**Kitsu API** — https://kitsu.app/api/edge/anime
API REST pública de anime y manga, sin necesidad de autenticación para lecturas (GET).

## Funcionalidades

- Búsqueda de animes por texto en tiempo real.
- Listado de resultados en tarjetas (imagen, título, tipo, estado, puntaje).
- Manejo de estados de carga y error, con botón de reintentar.
- Colección personal ("Mi colección") con operaciones CRUD completas:
  - **Crear**: agregar un anime a la colección desde el buscador.
  - **Leer**: ver todos los animes guardados.
  - **Actualizar**: editar el estado personal (Pendiente / Viendo / Visto) y una nota personal.
  - **Eliminar**: quitar un anime de la colección.
- Persistencia en Local Storage: los datos sobreviven al recargar la página.
- Diseño responsive y accesible (labels asociados, texto alternativo en imágenes).

## Instalación y ejecución

```bash
npm install
npm run dev
```

Luego abrir la URL que indica la terminal (por defecto `http://localhost:5173`).

## Estructura del proyecto