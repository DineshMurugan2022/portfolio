# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploying to Vercel

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Go to https://vercel.com/import and import your repository.
3. Set the **Framework Preset** to 'Vite'.
4. Set the **Build Command** to `npm run build` or `yarn build`.
5. Set the **Output Directory** to `dist`.
6. (Optional) Add any environment variables you need.
7. Click **Deploy**.

Vercel will automatically detect the `vercel-build` script and use it if present.
