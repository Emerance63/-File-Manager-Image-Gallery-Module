# Dashboard Dashboard (React + Vite)

## Tech Stack
- **React** – UI library.
- **Vite** – Fast dev server & bundler.
- **Tailwind CSS** – Utility‑first styling (if used) else plain CSS.
- **React Icons** – Icon set.
- **ESLint + Prettier** – Code quality.

## State Management
We use **React's built‑in `useState` hook** for component‑level state (e.g., search box, person dropdown). At the current size (a single‑page dashboard with a handful of interactive elements) this is sufficient:
- No external store adds bundle size or complexity.
- Guarantees fast, local updates without boilerplate.
- Keeps the project easy to reason about for newcomers.

Additionally, we expose a custom **`useFiles`** hook from `src/context/FileContext`. This hook centralizes the search query state and provides `searchQuery` and `setSearchQuery` to any component, avoiding prop‑drilling and keeping the UI in sync.

## Hooks Overview

### `useState`
- Built‑in React hook for local component state.
- Returns a state variable and a setter function.
- Used in `Topbar.jsx` to control UI elements (e.g., toggle menus, hold temporary values).

### `useFiles` (custom)
- Defined in `src/context/FileContext`.
- Wraps a `useState` that stores the global `searchQuery`.
- Exposes `searchQuery` and `setSearchQuery` via context, allowing any component (Topbar, FilesView, etc.) to read or update the search term without passing props.

## Running the Project
```bash
# clone (if needed) and install dependencies
npm install

# start development server
npm run dev

# open http://localhost:5173 in your browser
```

## Known Limitations
- **Add / Delete / Edit functionality** for files/folders is intentionally omitted in this iteration.
- The person‑icon dropdown was removed; only the static icon remains.
- No persistent storage – data resets on page reload.
- UI is responsive but not fully optimized for all screen sizes.
- Search only filters in‑memory mock data; no backend integration.

Feel free to extend the app with a proper backend, routing, and full CRUD operations as needed.

