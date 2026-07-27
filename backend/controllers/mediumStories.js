import { fetchMediumStories } from "../services/portfolio.js";
import { cache } from "../repositories/cache.js";
function hashJson(data) {
    let str = JSON.stringify(data);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return Math.abs(hash).toString(16);
}
export async function mediumStories(req, res) {
    try {
        const cached = cache.get("medium-stories");
        if (cached) {
            res.set("Cache-Control", "public, max-age=900");
            res.set("ETag", `"md5-${hashJson(cached)}"`);
            res.set("Last-Modified", new Date().toUTCString());
            res.status(200).json(cached);
            return;
        }
        const stories = await fetchMediumStories(false);
        res.status(200).json(stories);
    }
    catch (err) {
        res.status(500).json({
            error: err instanceof Error ? err.message : "Internal server error",
        });
    }
}
