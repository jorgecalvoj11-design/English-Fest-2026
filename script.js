/* =============================================
   English Festival 2026 — Chatbot Script
   ============================================= */

// ── API CONFIGURATION ────────────────────────
const API_KEY   = "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";
const API_MODEL = "claude-haiku-4-5-20251001";
const WORKER_URL = "https://dawn-snowflake-3dab.jorgecalvoj11.workers.dev";

// ── MANUAL CONTEXT (system prompt) ───────────
const SYSTEM_PROMPT = `
You are a helpful, friendly assistant for the MEP (Ministerio de Educación Pública) Costa Rica English Festival 2026.
Answer questions based ONLY on the manual content below. Be clear, helpful, and concise.
If something is not covered in the manual, say so politely and suggest what section might help.
Always respond in the same language the user writes in — Spanish or English.
Use bullet points or short paragraphs for clarity. Never make up information.

══════════════════════════════════════════════
ENGLISH FESTIVAL 2026 — FULL MANUAL CONTENT
══════════════════════════════════════════════

WHAT IS THE FESTIVAL?
The Festival de Inglés is an inclusive, non-competitive, formative space for ALL students across ALL levels and modalities of Costa Rica's public education system — preschool (preescolar, acelerador), primary (primaria, aceleradores), and secondary (académica, técnica, bilingüe, nocturna, EOS, telesecundaria, CINDEA, IPEC, Liceo Rural, Colegios Científicos, Ambientalistas, plan nacional, EPJA, etc.) — to demonstrate their English linguistic competencies in creative, free ways aligned to current study programs.

IT IS NOT COMPETITIVE. It is formative. Its purpose is to highlight student talents and linguistic competencies.

GENERAL OBJECTIVE:
Provide students with spaces to demonstrate the linguistic competencies developed during the teaching-learning process, within the framework of current English study programs.

SPECIFIC OBJECTIVES:
- Provide students with a space for interaction and use of English in meaningful communicative situations.
- Facilitate healthy coexistence and interculturality through dynamic participation.
- Develop creativity, autonomy, and critical thinking aligned with 21st-century demands.
- Involve students, teachers, and parents/guardians in supporting English language learning.

KEY GUIDELINES:
- All enrolled students in public institutions may participate.
- Held annually per the school calendar.
- Organized by the English teacher/department in collaboration with parents, admin, and community — NOT the exclusive responsibility of the English teacher.
- Preparation is done DURING regular class hours. No extra hours, no additional workload for teachers.
- Universal Design for Learning (DUA) must apply — flexible, inclusive, accessible for all.
- The festival may be open to families and community as spectators when resources allow.
- The manual must be shared with parents in an official meeting.
- Regional Advisors are responsible for disseminating the festival rules to all English teachers in their region.
- Cultural activities related to the target language should be included.

WHAT IS NOT ALLOWED:
- Spelling Bee → does NOT meet festival criteria. NOT part of the festival framework.
- Dance activities → NOT considered linguistic competencies. NOT part of the festival.
- Activities outside regular school hours.
- Extra workload for teachers beyond regular planning.

TEACHER'S ROLE:
1. Coordinate the festival collaboratively with parents, admin, and local community.
2. Register participating students and submit lists to school administration.
3. Ensure students have all materials and information needed.
4. Report to Regional Advisory with photos and evidence of the festival.
5. Share student achievements; project creativity and professionalism before the community.
6. Update knowledge and techniques; reinforce vocabulary aligned to study programs.

─────────────────────────────────────────────
PRESCHOOL (Educación de la Primera Infancia)
─────────────────────────────────────────────
Modalities: Open House OR English Festival.
Focus: Oral comprehension and emergent oral expression in meaningful, playful, socially relevant contexts.
Responses may be through gestures, pointing, body participation, or emerging words — all valid.
DUA principles must guarantee multiple forms of participation, representation, and expression.

WHAT IS ACCEPTED:
- Symbolic play / juego simbólico
- Storytelling with books or printed images
- Songs with actions showing comprehension
- Simple role plays with brief, repetitive model phrases
- Daily routines (greetings, weather, feelings, classroom actions)
- Nature exploration / science activities
- Physical movement games

WHAT IS NOT ACCEPTED:
- Activities based only on mechanical repetition
- Imitation without linguistic mediation
- Artistic performances where English is NOT a real communication tool

SAMPLE ACTIVITIES:
1. Body Awareness — "The Hospital": symbolic play as doctor/patient/family. Language: "What's wrong? My head hurts. Sit down. You're okay."
2. Elements in the Environment — "Nature Exploration": students observe natural elements. Language: "Look! What is this? Big/small. Same/different. Colors. Shapes."
3. School — "School Experience Roleplay": students explore school spaces, assume roles (teacher, student, helper). Language: "Hello! Let's play. Your turn/My turn. Help me. Thank you."
4. My Feelings — "Feeling Detective": identify and express basic emotions in English with visual support. Language: "Happy/Sad/Angry/Scared. I feel… Are you okay?"
5. Family — "Family Role Play": represent daily family scenes (cooking, caring). Language: "This is my mom/dad/sister/brother. I love my…"
6. Physical Activity — "Follow the Leader": follow movements, students assume leader role spontaneously. Language: "Follow me, let's go, stop, go, jump, run."

─────────────────────────────────────────────
FIRST AND SECOND CYCLE — Primary
─────────────────────────────────────────────
Approach: Action-Oriented Approach (AOA). Students as social agents and progressive language users.
Focus: Oral and written comprehension and production. Meaningful communicative tasks. NOT mechanical repetition.

WITHOUT TECHNOLOGY:
- Mini-project displays: posters, models, oral presentations
- Role plays and dramatizations (ordering food, asking for information, interviews)
- Guided oral presentations with visual supports
- Oral narrations / storytelling
- Communicative task stations

WITH TECHNOLOGY:
- Short interview or dramatization videos
- Digital presentations accompanying oral production
- Short podcasts
- Hummingbird Project productions

FIRST CYCLE SAMPLE TASKS:
1. My Daily Routines Poster: poster + oral presentation. Language: daily routines, simple present.
2. Greetings Around the School: role play in different school spaces. Language: Hello, Good morning, How are you?
3. My Favorite Animal Show and Tell: "This is my favorite animal. It is big. I like it."
4. My Community Mini Video: group video + oral presentation. Language: places in community.
5. My Family Digital Story: digital slides about family + oral presentation.

SECOND CYCLE SAMPLE TASKS:
1. My Community in Action: poster/model + explain places and activities.
2. Problem Solvers Role Play: everyday situations (lost object, asking directions).
3. My Healthy Life Presentation: health habits poster + oral.
4. Mini Documentary My School Life: group video + oral presentation.
5. My Opinion Podcast: audio recording of opinions + brief oral interaction.

─────────────────────────────────────────────
THIRD CYCLE AND DIVERSIFICADA — Secondary
─────────────────────────────────────────────
Approach: Action-Oriented Approach. Students as social agents using English for real tasks.
Activities should reflect mini-projects or communicative tasks from regular classroom work.

MODALITY EXPECTATIONS:
- Technical schools: higher communicative complexity, specialized language.
- Bilingual schools / Liceos Experimentales Bilingües: broader, more fluent language use.
- EOS workshops: authentic communicative situations; coordinate with academic English department.
- Night schools, CINDEA, IPEC, rural schools: adapted to context and resources.

SAMPLE TASKS:
1. Mini-Projects: demonstrate classroom learning aligned to study program scenarios.
2. Literary Projects: stories, narratives, comic strips, essays, autobiographies. Required for EOS; available to all schools.
3. Songs: original composition, adaptation, or interpretation. Must include contextualization — NOT mechanical reproduction.
4. Oral Speeches: inform, persuade, or convince. May use audiovisual aids and brief notes — must NOT read directly.
5. Role Plays: groups of 3–6. Script, practice, optionally costumes. Includes improvisation.
6. Spontaneous or Guided Interactions: conversations on topics from study program scenarios.
7. Debates: critical exchange. Students take a position and defend with arguments.

─────────────────────────────────────────────
APPENDIX — ADDITIONAL ACTIVITIES
─────────────────────────────────────────────

READER'S THEATER: Each student interprets a character expressively for an audience.
Steps: choose story → identify characters → listen to teacher read → read silently → look up vocabulary → share comprehension → analyze characters → choose role → optional costume → identify own dialogues → read together → practice and present.

CONVERSATIONS: Pairs or groups (max 4). Spontaneous dialogue on study program topics. Minimum 2 minutes.

ROLE-PLAYS (detailed steps): Groups of 3–6. Choose topic → write script → practice → optional costumes → present before audience → judges evaluate with rubric.

PLAN NACIONAL STUDENTS: May participate using activities from any level that fits their context.
`.trim();

// ── STATE ─────────────────────────────────────
let conversationHistory = [];
let isLoading = false;

// ── DOM HELPERS ───────────────────────────────
const chatWindow = () => document.getElementById("chat-window");
const userInput  = () => document.getElementById("user-input");
const sendBtn    = () => document.getElementById("send-btn");

// ── AUTO-RESIZE TEXTAREA ─────────────────────
function autoResize(el) {
  el.style.height = "auto";
  el.style.height = Math.min(el.scrollHeight, 130) + "px";
}

// ── KEYBOARD HANDLER ─────────────────────────
function handleKey(e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

// ── SUGGESTION BUTTONS ───────────────────────
function sendSuggestion(btn) {
  userInput().value = btn.textContent.trim();
  sendMessage();
}

// ── SCROLL TO BOTTOM ─────────────────────────
function scrollToBottom() {
  const win = chatWindow();
  win.scrollTop = win.scrollHeight;
}

// ── ADD A MESSAGE BUBBLE ─────────────────────
function addMessage(role, text, isError = false) {
  const win = chatWindow();
  const div = document.createElement("div");
  div.className = `msg ${role}`;

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = role === "user" ? "👤" : "🎭";

  const bubble = document.createElement("div");
  bubble.className = "bubble" + (isError ? " error-bubble" : "");
  bubble.innerHTML = renderMarkdown(text);

  div.appendChild(avatar);
  div.appendChild(bubble);
  win.appendChild(div);
  scrollToBottom();
  return bubble;
}

// ── TYPING INDICATOR ─────────────────────────
function showTyping() {
  const win = chatWindow();
  const div = document.createElement("div");
  div.className = "msg bot";
  div.id = "typing-indicator";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = "🎭";

  const bubble = document.createElement("div");
  bubble.className = "bubble typing-bubble";
  bubble.innerHTML = "<span></span><span></span><span></span>";

  div.appendChild(avatar);
  div.appendChild(bubble);
  win.appendChild(div);
  scrollToBottom();
}

function removeTyping() {
  const el = document.getElementById("typing-indicator");
  if (el) el.remove();
}

// ── SIMPLE MARKDOWN RENDERER ─────────────────
function renderMarkdown(text) {
  let html = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^[-•] (.+)$/gm, "<li>$1</li>")
    .replace(/^\d+\. (.+)$/gm, "<li>$1</li>");

  html = html.replace(/(<li>[\s\S]*?<\/li>)(\n<li>[\s\S]*?<\/li>)*/g, (m) => `<ul>${m}</ul>`);
  html = html.replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>");
  return `<p>${html}</p>`;
}

// ── SEND MESSAGE ─────────────────────────────
async function sendMessage() {
  const input = userInput();
  const text  = input.value.trim();
  if (!text || isLoading) return;

  const welcome = document.getElementById("welcome-card");
  if (welcome) welcome.style.display = "none";

  addMessage("user", text);
  input.value = "";
  input.style.height = "auto";

  conversationHistory.push({ role: "user", content: text });

  isLoading = true;
  sendBtn().disabled = true;
  showTyping();

  try {
    const response = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey: API_KEY,
        model: API_MODEL,
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: conversationHistory
      })
    });

    const data = await response.json();
    removeTyping();

    if (data.content && data.content[0] && data.content[0].text) {
      const reply = data.content[0].text;
      conversationHistory.push({ role: "assistant", content: reply });
      addMessage("bot", reply);
    } else if (data.error) {
      addMessage("bot", `⚠️ API Error: ${data.error.message}`, true);
      console.error("API error:", data.error);
    } else {
      addMessage("bot", "⚠️ No response received. Please try again.", true);
      console.error("Unexpected response:", data);
    }

  } catch (err) {
    removeTyping();
    addMessage("bot", "⚠️ Connection error. Please check your internet and try again.", true);
    console.error("Fetch error:", err);
  }

  isLoading = false;
  sendBtn().disabled = false;
  input.focus();
}

// ── INIT ─────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  userInput().focus();
});
