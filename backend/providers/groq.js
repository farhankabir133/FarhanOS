import { fetchClient } from "../utils/fetchClient.js";
import { config } from "../config/env.js";
export async function chatCompletion(messages, requestId) {
    const apiKey = config.groq.apiKey;
    if (!apiKey) {
        throw new Error("GROQ_API_KEY is not configured.");
    }
    const groqRes = await fetchClient(config.groq.baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: config.groq.model,
            messages,
            temperature: config.groq.temperature,
            max_tokens: config.groq.maxTokens,
        }),
    }, config.groq.timeoutMs, 1);
    if (!groqRes.ok) {
        const errBody = await groqRes.json().catch(() => ({}));
        const errMsg = errBody.error?.message || `Groq API error: ${groqRes.status}`;
        throw new Error(errMsg);
    }
    const data = await groqRes.json();
    return data.choices?.[0]?.message?.content || "";
}
