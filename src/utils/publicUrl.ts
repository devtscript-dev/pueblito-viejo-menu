// Antepone el base path de Vite (ej. "/pueblito-viejo-menu/") a rutas absolutas
// de public/, para que las imagenes/videos resuelvan bien en GitHub Pages.
export function withBase(path: string): string;
export function withBase(path: string | undefined): string | undefined;
export function withBase(path?: string): string | undefined {
  return path === undefined ? undefined : `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
