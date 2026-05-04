# GisTrip

> Plan the route. Live the trip.

Coming-soon page for gistrip.com. A single hand-written `index.html` (plus a favicon). No build step, no framework, no dependencies.

## Files

- `index.html` — the page (HTML + CSS + JS all inline)
- `favicon.svg` — the icon

## Run locally

Any static server will do. Easiest:

```bash
npx serve .
```

…then open the URL it prints.

## Deploy

FTP `index.html` and `favicon.svg` to your OVH webroot.

## Email signups

The form posts directly from the browser to [Web3Forms](https://web3forms.com). The access key is hardcoded in the inline script in `index.html` (search for `ACCESS_KEY`). Web3Forms keys are designed to be public; submissions are forwarded to the email registered on that key.

After a successful signup, the form is replaced with a "you're in" card and the state is persisted in `localStorage` under `gt_subscribed`, so the same browser can't keep submitting.
