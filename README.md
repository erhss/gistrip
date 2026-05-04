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

## Deploying

Hosted on OVH. Build with `npm run build`, then either run `npm start` (Node hosting) or run a static export and rsync `out/` to the OVH webroot. No env vars required.
