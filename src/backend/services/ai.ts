import { chatCompletion, chatCompletionStream } from "../providers/groq.js";
import { ASK_TWIN_SYSTEM_PROMPT, SUMMARIZE_BRIEF_SYSTEM_PROMPT_PREFIX, CONTACT_ANALYSIS_PROMPT_PREFIX, buildContactAnalysisPrompt } from "../prompts.js";

const MAX_HISTORY_TURNS = 12;
const MAX_HISTORY_CHARS = 16000;

export interface HistoryItem {
  role: string;
  content: string;
}

/**
 * Bounds conversation history before it reaches Groq:
 * - drops malformed/oversized items
 * - keeps only the most recent MAX_HISTORY_TURNS turns
 * - enforces a total character budget (oldest dropped first)
 */
export function trimHistory(
  history?: HistoryItem[]
): Array<{ role: "user" | "assistant"; content: string }> {
  if (!history || !Array.isArray(history)) return [];

  const valid = history.filter(
    (h) =>
      h &&
      typeof h.content === "string" &&
      h.content.trim().length > 0 &&
      h.content.length <= 10000
  );

  const recent = valid.slice(-MAX_HISTORY_TURNS);

  let total = 0;
  const out: Array<{ role: "user" | "assistant"; content: string }> = [];
  for (let i = recent.length - 1; i >= 0; i--) {
    total += recent[i].content.length;
    if (total > MAX_HISTORY_CHARS && out.length > 0) break;
    out.unshift({
      role: recent[i].role === "user" ? "user" : "assistant",
      content: recent[i].content,
    });
  }
  return out;
}

export async function orchestrateAskTwin(
  message: string,
  history?: HistoryItem[]
): Promise<string> {
  const formattedContents = trimHistory(history);
  formattedContents.push({ role: "user", content: message });

  return chatCompletion(
    [{ role: "system", content: ASK_TWIN_SYSTEM_PROMPT }, ...formattedContents],
    ""
  );
}

export async function orchestrateAskTwinStream(
  message: string,
  history?: HistoryItem[]
): Promise<ReadableStream<Uint8Array>> {
  const formattedContents = trimHistory(history);
  formattedContents.push({ role: "user", content: message });

  return chatCompletionStream(
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
