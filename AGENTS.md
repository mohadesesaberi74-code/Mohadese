# نوبرانه — Base44 development notes

Frontend-only Persian RTL homepage for an Iranian spice brand (no backend, DB, or auth).

## Run
`docker compose -f docker-compose.base44.yml up -d` — serves Vite dev server on port 3000 (host-mapped), live reload enabled. Dependencies are installed on container startup (`npm install`) because `node_modules` lives on the bind mount.

## Stack
- Vite 6 + React 18, plain CSS with design tokens in `src/styles/base.css`.
- Persian font self-hosted via `@fontsource/vazirmatn` (imported in `src/main.jsx`) — no CDN dependency.
- RTL is set on `<html dir="rtl">`; hero/story grids use `grid-template-areas` because the first grid column sits on the right in RTL.

## Sandbox overrides
- `BASE44_PREVIEW_MODE` and `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` are passed through as bare compose env entries; Vite >= 6.1 appends the latter to `allowedHosts` so the preview host can load dev assets/HMR. With the flag unset, behavior is unchanged (standard Vite host checking).
- `vite.config.js` binds `host: true` (0.0.0.0) — required inside containers.

## Images
- Product/food photos are committed under `public/images/` (sourced from Wikimedia Commons; several are authentic Iranian dishes). Replace with brand photography later.
- All display data (nav, products, categories, recipes, footer links) lives in `src/data/site.js` — swap in real catalog data there.

## Verify
- `curl http://localhost:3000/` returns the Vite-served index.html with `dir="rtl"`.
- `docker compose -f docker-compose.base44.yml ps` — `web` should be healthy.
