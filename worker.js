/**
 * Cloudflare Worker — Anthropic API Proxy
 * English Festival 2026
 *
 * This worker receives requests from GitHub Pages and forwards them
 * to the Anthropic API, adding the correct CORS headers so the browser
 * doesn't block the call.
 *
 * HOW TO DEPLOY:
 * 1. Go to https://workers.cloudflare.com and sign up (free).
 * 2. Click "Create a Worker".
 * 3. Delete the default code and paste ALL of this file.
 * 4. Click "Save and Deploy".
 * 5. Copy the Worker URL (e.g. https://english-festival.YOUR-NAME.workers.dev)
 * 6. Paste that URL into script.js where it says PASTE_YOUR_WORKER_URL_HERE
 */

export default {
  async fetch(request, env) {

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin":  "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      const body = await request.json();

      // Extract apiKey sent from frontend; remove before forwarding
      const { apiKey, ...anthropicPayload } = body;

      if (!apiKey) {
        return new Response(JSON.stringify({ error: { message: "No API key provided." } }), {
          status: 400,
          headers: corsHeaders()
        });
      }

      // Forward to Anthropic
      const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type":       "application/json",
          "x-api-key":          apiKey,
          "anthropic-version":  "2023-06-01"
        },
        body: JSON.stringify(anthropicPayload)
      });

      const data = await anthropicResponse.json();

      return new Response(JSON.stringify(data), {
        status: anthropicResponse.status,
        headers: corsHeaders()
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: { message: err.message } }), {
        status: 500,
        headers: corsHeaders()
      });
    }
  }
};

function corsHeaders() {
  return {
    "Content-Type":                "application/json",
    "Access-Control-Allow-Origin": "*"
  };
}
