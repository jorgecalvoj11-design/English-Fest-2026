// ═══════════════════════════════════════════════
// 🔑 PUT YOUR ANTHROPIC API KEY HERE
// ═══════════════════════════════════════════════
const API_KEY = "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";
// ═══════════════════════════════════════════════

const MANUAL_CONTEXT = `
You are a helpful assistant for the MEP (Ministerio de Educación Pública) Costa Rica English Festival 2026. 
Answer questions based ONLY on the following manual content. Be helpful, clear, and concise.
If a question is not covered in the manual, say so politely.
Respond in the same language the user writes in (Spanish or English).

=== ENGLISH FESTIVAL 2026 MANUAL — KEY CONTENT ===

DESCRIPTION:
The Festival de Inglés is an inclusive space for all students across preschool, primary, and secondary (academic, technical, bilingual, night school, CINDEA, IPEC, etc.) to demonstrate their English language competencies. It is NOT competitive — it is formative. The goal is to highlight student talents and linguistic competencies.

GENERAL OBJECTIVE:
To provide students with spaces to demonstrate linguistic competencies developed during the teaching-learning process, in line with current English study programs.

KEY GUIDELINES:
- All students enrolled in public institutions may participate.
- The festival is held annually per the school calendar.
- Organization is led by the English teacher/department in collaboration with the educational community (parents, admin, local collaborators).
- It is NOT exclusively the English teacher's responsibility — it's a community effort.
- Spelling Bee is NOT part of the festival framework.
- Dance activities are NOT considered linguistic competencies and do NOT belong in the festival.
- Preparation happens during regular class time — no extra hours or additional workload for teachers.
- Universal Design for Learning (DUA) principles must apply — inclusive, flexible participation.
- The festival can be open to families and community as spectators when resources allow.

TEACHER'S ROLE:
1. Coordinate the festival collaboratively with parents, admin, and community.
2. Register participating students and present lists to school administration.
3. Ensure students have materials and information needed.
4. Report to Regional Advisory with photos and evidence.
5. Share achievements with students, project professionally in the community.

PRESCHOOL (Primera Infancia):
Modalities: Open House OR English Festival.
Focus: Oral comprehension and emergent oral expression in meaningful contexts.
Activities: symbolic play, storytelling, songs with actions, simple role plays, daily routines (greetings, weather, feelings), nature exploration, physical activities.
NOT accepted: mechanical repetition, imitation without linguistic mediation, artistic activities where English is not a real communication tool.
Sample themes: Body Awareness (The Hospital), Elements in the Environment (Nature Exploration), School (Roleplay), My Feelings (Feeling Detective), Family (Family Role Play), Physical Activity (Follow the Leader).

FIRST AND SECOND CYCLE (Primero y Segundo Ciclos — Primary):
Approach: Action-Oriented Approach (AOA). Students as social agents and progressive language users.
Focus: Oral and written comprehension and production, simple communicative tasks.
Without technology: Mini-project displays (posters, models), role plays, guided oral presentations, storytelling, communicative task stations.
With technology: Interview videos, dramatizations, digital presentations, short podcasts, productions from Hummingbird Project.

First Cycle sample tasks:
- My Daily Routines Poster (poster + oral presentation)
- Greetings Around the School (role play in different school spaces)
- My Favorite Animal Show and Tell (simple descriptions)
- My Community Mini Video (group video + oral presentation)
- My Family Digital Story (digital slideshow + oral)

Second Cycle sample tasks:
- My Community in Action (poster/model of community + oral explanation)
- Problem Solvers Role Play (dramatizations solving everyday situations)
- My Healthy Life Presentation (health habits poster + oral)
- Mini Documentary: My School Life (video + oral presentation)
- My Opinion Podcast (audio recording of opinions)

THIRD CYCLE AND DIVERSIFICADA (Secondary):
Students as social agents using English for real communication tasks.
Modalities covered: academic, technical, bilingual sections, night school, EOS workshops, rural schools, CINDEA, IPEC, etc.
Technical schools should show higher communicative complexity.
Bilingual schools should show broader, more fluent language use.

Sample tasks:
- Mini-Projects: demonstrate classroom learning aligned to study program scenarios.
- Literary Projects: stories, comics, essays, autobiographies, oral/written narratives. Required for EOS workshops and bilingual schools.
- Songs: original composition, adaptation, or interpretation with communicative intention (must include contextualization, not just mechanical reproduction).
- Oral Speeches (Discursos): inform, persuade, or convince — can use audiovisual aids, must NOT read directly from notes.
- Role Plays: groups of 3-6, fictional or real situations from study program, include improvisation.
- Spontaneous or Guided Interactions: conversations with or without a script, topics from study program scenarios.
- Debates: critical exchange of ideas, students defend positions with arguments.

APPENDIX ACTIVITIES:
- Reader's Theater: students each play a character, reading a script expressively for an audience. Steps: choose story, identify characters, read script silently, understand vocabulary, practice, present.
- Conversations: pairs or groups (max 4), spontaneous dialogue on topics from study programs, minimum 2 minutes.
- Role Plays (detailed steps): groups of 3-6, choose a study program topic, write a script, practice, optionally create costumes, present, judges evaluate with a rubric.

WHAT IS NOT ALLOWED:
- Spelling Bee (does not meet festival criteria)
- Dance activities (not linguistic competencies)
- Activities outside regular school hours
- Additional workload for teachers beyond regular planning

PLAN NACIONAL students: may participate using activities described for any level that fits their context.
`;

let conversationHistory = [];

function autoResize(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
}

function sendSuggestion(btn) {
    document.getElementById('user-input').value = btn.textContent;
    sendMessage();
}

function addMessage(role, text) {
    const win = document.getElementById('chat-window');
    const div = document.createElement('div');
    div.className = `msg ${role}`;

    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = role === 'user' ? '👤' : '🎭';

    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.innerHTML = formatText(text);

    div.appendChild(avatar);
    div.appendChild(bubble);
    win.appendChild(div);
    win.scrollTop = win.scrollHeight;
    return bubble;
}

function formatText(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/<li>/g, '<ul><li>').replace(/<\/li>(?![\s\S]*<li>)/, '</li></ul>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
}

function showTyping() {
    const win = document.getElementById('chat-window');
    const div = document.createElement('div');
    div.className = 'msg bot';
    div.id = 'typing-indicator';

    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = '🎭';

    const bubble = document.createElement('div');
    bubble.className = 'bubble typing-bubble';
    bubble.innerHTML = '<span></span><span></span><span></span>';

    div.appendChild(avatar);
    div.appendChild(bubble);
    win.appendChild(div);
    win.scrollTop = win.scrollHeight;
}

function removeTyping() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
}

async function sendMessage() {
    const input = document.getElementById('user-input');
    const btn = document.getElementById('send-btn');
    const text = input.value.trim();
    if (!text) return;

    input.value = '';
    input.style.height = 'auto';
    addMessage('user', text);

    conversationHistory.push({ role: 'user', content: text });

    btn.disabled = true;
    showTyping();

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
                'anthropic-version': '2023-06-01',
                'anthropic-dangerous-direct-browser-access': 'true'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 1000,
                system: MANUAL_CONTEXT,
                messages: conversationHistory
            })
        });

        const data = await response.json();
        removeTyping();

        if (data.content && data.content[0]) {
            const reply = data.content[0].text;
            conversationHistory.push({ role: 'assistant', content: reply });
            addMessage('bot', reply);
        } else {
            addMessage('bot', '⚠️ Sorry, I couldn\'t get a response. Please check the API key and try again.');
        }
    } catch (err) {
        removeTyping();
        addMessage('bot', '⚠️ Connection error. Please check your internet connection and try again.');
        console.error(err);
    }

    btn.disabled = false;
    input.focus();
}
