import { chatCompletion } from "../providers/groq.js";
import { ASK_TWIN_SYSTEM_PROMPT, SUMMARIZE_BRIEF_SYSTEM_PROMPT_PREFIX, buildContactAnalysisPrompt } from "../prompts.js";
export async function orchestrateAskTwin(message, history) {
    const formattedContents = [];
    if (history && Array.isArray(history)) {
        for (const h of history) {
            if (typeof h.content === "string" && h.content.length > 10000) {
                continue;
            }
            formattedContents.push({
                role: h.role === "user" ? "user" : "assistant",
                content: typeof h.content === "string" ? h.content : String(h.content),
            });
        }
    }
    formattedContents.push({ role: "user", content: message });
    return chatCompletion([{ role: "system", content: ASK_TWIN_SYSTEM_PROMPT }, ...formattedContents], "");
}
export async function orchestrateSummarizeBrief(params) {
    const prompt = SUMMARIZE_BRIEF_SYSTEM_PROMPT_PREFIX
        .replace("{projectType}", params.projectType)
        .replace("{budget}", params.budget || "")
        .replace("{timeline}", params.timeline || "")
        .replace("{goals}", params.goals)
        .replace("{comments}", params.comments || "");
    return chatCompletion([{ role: "user", content: prompt }], "");
}
export async function orchestrateContactAnalysis(params) {
    const prompt = buildContactAnalysisPrompt(params);
    return chatCompletion([{ role: "user", content: prompt }], "");
}
