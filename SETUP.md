# English Festival 2026 — Setup Guide

## Why do I need a Worker?

GitHub Pages runs in the browser. Browsers block direct calls to the Anthropic API
for security (this is called "CORS"). A Cloudflare Worker acts as a free middleman:
your page → Worker → Anthropic API → Worker → your page.

**Cloudflare Workers free tier: 100,000 requests/day. More than enough.**

---

## Step 1 — Deploy the Cloudflare Worker (5 minutes)

1. Go to **https://workers.cloudflare.com** and create a free account.
2. Click **"Create a Worker"**.
3. Delete ALL the default code in the editor.
4. Open `worker.js` from this folder and **paste everything** into the editor.
5. Click **"Save and Deploy"**.
6. Copy your Worker URL — it looks like:
   ```
   https://english-festival.YOUR-NAME.workers.dev
   ```

---

## Step 2 — Paste the Worker URL into script.js

Open `script.js` and find this line near the top:

```js
const WORKER_URL = "PASTE_YOUR_WORKER_URL_HERE";
```

Replace it with your real URL:

```js
const WORKER_URL = "https://english-festival.YOUR-NAME.workers.dev";
```

Save the file.

---

## Step 3 — Upload to GitHub Pages

1. Go to **https://github.com** and create a new repository (e.g. `english-festival-2026`).
2. Upload these 4 files into the repo:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `worker.js` *(optional, just for reference)*
3. Go to **Settings → Pages → Branch: main → Save**.
4. Your chatbot will be live at:
   ```
   https://YOUR-USERNAME.github.io/english-festival-2026
   ```

---

## Files in this project

| File | Purpose |
|------|---------|
| `index.html` | Main page structure |
| `styles.css` | All visual styling |
| `script.js` | Chat logic + API calls |
| `worker.js` | Cloudflare proxy (deploy separately) |

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Still getting CORS error | Make sure the Worker URL in `script.js` is correct |
| API error message | Check the API key in `script.js` is valid |
| Worker not responding | Go to Cloudflare dashboard and check the Worker is deployed |
