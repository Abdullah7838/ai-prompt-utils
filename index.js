async function callAI(apiUrl, apiKey, prompt) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini", 
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "";
}

// ===== Prompt Utils =====

async function summarize(text, apiUrl, apiKey) {
  return await callAI(apiUrl, apiKey, `Summarize this text in 3 sentences:\n\n${text}`);
}

async function translate(text, lang, apiUrl, apiKey) {
  return await callAI(apiUrl, apiKey, `Translate this into ${lang}:\n\n${text}`);
}

async function rephrase(text, apiUrl, apiKey) {
  return await callAI(apiUrl, apiKey, `Rephrase this in simpler words:\n\n${text}`);
}

async function explain(text, apiUrl, apiKey) {
  return await callAI(apiUrl, apiKey, `Explain this like I'm five:\n\n${text}`);
}

module.exports = { summarize, translate, rephrase, explain };
