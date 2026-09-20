# DOOMSDAY WATCH-LIST

A local-first Marvel watch-list tracker built with Vite, React, React Router, Framer Motion, Recharts, and CSS. It supports separate usernames, SHA-256 password hashing via Web Crypto, persistent checklist progress, and planner settings.

## Run

```bash
npm install
npm run dev
```

Open the URL Vite prints (normally `http://localhost:5173`). Create an account in the browser. No backend is required: users, progress, and plans are stored in localStorage under `users`, `progress:<username>`, and `plan:<username>` through `src/lib/storage.js`.

## Edit the catalog

Edit `src/data/watchlist.js`. Each record has `id`, `title`, `year`, `type`, `group`, `category`, `runtimeMinutes`, and `order`. Keep IDs unique when linking an item between categories. To swap to Supabase later, replace the functions in `src/lib/storage.js` without changing the UI.

Character decoration is original CSS/React silhouette-style line art. Drop personal PNG/SVG assets into `public/characters/` and use the mapping described in that folder's README when extending the decoration layer.
