# LatePunch

Landing estática vanilla HTML/CSS/JS preparada para Netlify.

## Desarrollo local

```bash
npm run dev
```

Abre `http://127.0.0.1:3000`.

## Deploy en Netlify

- Base directory: raíz del proyecto
- Build command: vacío
- Publish directory: `.`

El formulario envía a Formspree desde `script.js`. El email receptor no está en el frontend; se configura en Formspree.
## Deploy en Coolify

Opción recomendada: Dockerfile.

- Build pack: Dockerfile
- Dockerfile: `Dockerfile`
- Exposed port: `80`
- Healthcheck path: `/`

El contenedor sirve la landing con Nginx. El formulario sigue enviando a Formspree por HTTPS.
