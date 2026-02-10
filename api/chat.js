export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, cvText } = req.body;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Tu es un assistant professionnel qui répond aux questions sur le CV de Anis Mekbal.

              CONTEXTE DU CV:
              ${cvText}

              QUESTION DU RECRUTEUR:
              ${message}

              RÈGLES:
              - Réponds uniquement à partir du CV
              - Français professionnel
              - Réponse concise
              - Si info absente → dis-le clairement

              RÉPONSE:`}]
          }],
          generationConfig: {
            maxOutputTokens: 700,
            temperature: 0.4,
            topP: 0.8,
            topK: 40
          }
        })
      }
    );

    const data = await response.json();

    res.status(200).json({
      reply: data.candidates?.[0]?.content?.parts?.[0]?.text
        || "Je n’ai pas pu générer une réponse."
    });

  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}
