# GisTrip

> Plan the route. Live the trip.

Coming-soon page for GisTrip. A trip planner that lives on the map.

## Tech stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Web3Forms for email signups (submissions forwarded to your registered email)

No database. No server routes. The form posts directly to Web3Forms from the browser. Visit analytics are handled by the host (OVH).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What's here

- `/` is the entire site: logo, tagline, email signup. The form posts directly to `https://api.web3forms.com/submit` with the access key embedded in `src/components/SubscribeForm.tsx`.

## Changing the Web3Forms key

The access key is hardcoded in `src/components/SubscribeForm.tsx`. Web3Forms keys are designed to be public, so this is fine. To change it, replace the `WEB3FORMS_KEY` constant.

## Deploying to OVH (static)

`next.config.mjs` is set to `output: "export"`, so the project builds to a flat static folder.

```bash
npm install
npm run build       # writes ./out/
```

Upload the **contents** of `out/` to the OVH webroot (typically `www/` over FTP/SFTP, or rsync to the server). No Node runtime needed; no env vars required.

```bash
# Example rsync deploy
rsync -avz --delete out/ user@host:/home/user/www/
```

If you serve under a subpath (e.g. `gistrip.com/preview`) instead of the apex, also set `basePath: "/preview"` in `next.config.mjs` and rebuild.
