# Fujiko — sitio web MVP

Tienda estática (sin backend) para una marca japonesa de estilo de vida.
Construida con **React + Vite + Tailwind CSS + React Router**.

## Estructura del proyecto

```
src/
  config/brand.js        → nombre de marca, WhatsApp, redes (único lugar a editar)
  data/products.js       → catálogo (25 productos de ejemplo)
  data/categories.js     → categorías (agrega una nueva sin tocar componentes)
  context/CartContext.jsx→ carrito con persistencia en localStorage
  hooks/                 → useRecentlyViewed
  utils/                 → formato de precios, generador de mensaje de WhatsApp
  components/
    ui/                  → Button, Badge, Input, Modal, Dropdown, SealMark…
    layout/               → Navbar, Footer, CartDrawer
    product/              → ProductCard, ProductGrid
    home/                 → secciones de la página de inicio
  pages/                  → Home, Catalog, ProductPage, CartPage, Checkout, About, NotFound
```

## Cambiar el nombre de la marca

Todo el proyecto lee el nombre y los datos de contacto desde
`src/config/brand.js`. Cambia `name`, `whatsappNumber`, `email`, etc. ahí —
no hay strings de marca repetidos en el resto del código.

⚠️ Antes de publicar, reemplaza `whatsappNumber` en ese archivo por el
número real de WhatsApp Business (formato internacional, sin símbolos,
ej. `573001234567`).

## Desarrollo local

```bash
npm install
npm run dev
```

## Compilar para producción

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para publicar. El proyecto usa rutas
**relativas** (`base: './'` en `vite.config.js`) y `HashRouter` para el
enrutamiento, así que el sitio funciona correctamente en un subdirectorio
de GitHub Pages sin configuración adicional ni reglas de reescritura del
servidor.

## Publicar en GitHub Pages

### Opción 1 — con el script incluido (recomendado)

1. Crea un repositorio en GitHub y sube este proyecto:
   ```bash
   git init
   git add .
   git commit -m "Fujiko MVP"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
2. Publica:
   ```bash
   npm run deploy
   ```
   Esto compila el proyecto y publica la carpeta `dist/` en la rama
   `gh-pages` usando el paquete `gh-pages` (ya incluido en devDependencies).
3. En GitHub: **Settings → Pages → Source**, selecciona la rama
   `gh-pages` y la carpeta `/ (root)`.
4. Tu sitio quedará disponible en:
   `https://TU_USUARIO.github.io/TU_REPO/`

### Opción 2 — con GitHub Actions

Si prefieres que se publique automáticamente en cada push a `main`, crea
`.github/workflows/deploy.yml` con un flujo estándar de "build y publicar
en Pages" (Node 20, `npm ci`, `npm run build`, subir `dist/` con
`actions/upload-pages-artifact` y `actions/deploy-pages`). Pídele ayuda a
Claude si quieres que te lo genere.

## Datos de muestra

Los 25 productos y las 6 categorías en `src/data/` son de ejemplo, con
imágenes de marcador de posición (picsum.photos). Reemplázalos por tus
productos, precios e imágenes reales antes de lanzar.

## Próximos pasos sugeridos (sin romper la arquitectura actual)

- Cuentas de usuario / login
- Historial de pedidos
- Pasarela de pagos
- Panel de administración para el catálogo
- Lista de deseos
- Reseñas de producto
- Blog
- Internacionalización (varios idiomas)

Como el catálogo vive en un solo archivo de datos con una forma bien
definida, migrarlo a una API o CMS más adelante no debería requerir
reescribir los componentes.
