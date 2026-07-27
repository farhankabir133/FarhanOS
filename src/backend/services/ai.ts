import { chatCompletion } from "../providers/groq.js";
import { ASK_TWIN_SYSTEM_PROMPT, SUMMARIZE_BRIEF_SYSTEM_PROMPT_PREFIX, CONTACT_ANALYSIS_PROMPT_PREFIX, buildContactAnalysisPrompt } from "../prompts.js";

export async function orchestrateAskTwin(
  message: string,
  history?: Array<{ role: string; content: string }>
): Promise<string> {
  const formattedContents: Array<{ role: "user" | "assistant" | "system"; content: string }> = [];

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

  return chatCompletion(
    [{ role: "system", content: ASK_TWIN_SYSTEM_PROMPT }, ...formattedContents],
    ""
  );
}

export async function orchestrateSummarizeBrief(params: {
  projectType: string;
  budget?: string;
  timeline?: string;
  goals: string;
  comments?: string;
}): Promise<string> {
  const prompt = SUMMARIZE_BRIEF_SYSTEM_PROMPT_PREFIX
    .replace("{projectType}", params.projectType)
    .replace("{budget}", params.budget || "")
    .replace("{timeline}", params.timeline || "")
    .replace("{goals}", params.goals)
    .replace("{comments}", params.comments || "");

  return chatCompletion(
    [{ role: "user", content: prompt }],
    ""
  );
}

export async function orchestrateContactAnalysis(params: {
  name: string;
  email: string;
  subject: string;
  message: string;
  metadata?: Record<string, unknown>;
}): Promise<string> {
  const prompt = buildContactAnalysisPrompt(params);

  return chatCompletion(
    [{ role: "user", content: prompt }],
    ""
  );
}