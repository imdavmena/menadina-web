# MENADINA Web App

Una aplicación web moderna construida con SvelteKit, TypeScript y TailwindCSS para el catálogo de productos de MENADINA.

## Características

- **SvelteKit**: Framework moderno para aplicaciones web con SSR y SPA.
- **TypeScript**: Tipado estático para mejor desarrollo.
- **TailwindCSS**: Estilos utilitarios para diseño responsivo.
- **Filtrado de productos**: Por categoría y búsqueda en tiempo real.
- **Responsive**: Optimizado para móviles y desktop.
- **SEO-friendly**: Metadatos y prerendering.
- **WhatsApp integration**: Enlaces directos para consultas.

## Requisitos

- Node.js 18+
- pnpm (recomendado) o npm

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/imdavmena/menadina-web.git
   cd menadina-web
   ```

2. Instala las dependencias:
   ```bash
   pnpm install
   # o
   npm install
   ```

3. Configura las variables de entorno (opcional):
   Crea un archivo `.env` en la raíz:
   ```
   PUBLIC_WHATSAPP_NUMBER=18001234567
   ```

## Desarrollo

Inicia el servidor de desarrollo:
```bash
pnpm dev
# o
npm run dev
```

La app estará disponible en `http://localhost:5173`.

## Construcción

Para construir la app para producción:
```bash
pnpm build
# o
npm run build
```

## Previsualización

Para previsualizar la build de producción:
```bash
pnpm preview
# o
npm run preview
```

## Estructura del proyecto

- `src/routes/`: Páginas y layouts
- `src/lib/components/`: Componentes reutilizables
- `src/lib/data/`: Datos de productos y categorías
- `src/lib/utils/`: Utilidades (formateo, WhatsApp)

## Despliegue

La app está configurada para desplegarse en cualquier plataforma que soporte Node.js (Vercel, Netlify, etc.).

Para Vercel:
```bash
pnpm add -D @sveltejs/adapter-vercel
# Cambia en svelte.config.js: import adapter from '@sveltejs/adapter-vercel';
```

## Contribución

1. Crea una rama para tu feature
2. Haz commits descriptivos
3. Push y crea un PR

## Licencia

Este proyecto es privado para MENADINA.