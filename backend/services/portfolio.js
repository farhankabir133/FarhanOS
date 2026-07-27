import { cache } from "../repositories/cache.js";
import { fetchMediumRSS } from "../providers/medium.js";
import { fetchTopRepos } from "../providers/github.js";
import { parseMediumRSS } from "../utils/rssParser.js";
import { config } from "../config/env.js";
const MEDIUM_TTL = 15 * 60 * 1000;
const GITHUB_TTL = 60 * 60 * 1000;
export async function fetchMediumStories(cached = true) {
    if (cached) {
        const cachedData = cache.get("medium-stories");
        if (cachedData)
            return cachedData;
    }
    const xmlText = await fetchMediumRSS();
    const stories = parseMediumRSS(xmlText);
    cache.set("medium-stories", stories, MEDIUM_TTL);
    return stories;
}
export async function fetchGithubRepos(cached = true) {
    if (cached) {
        const cachedData = cache.get("github-repos");
        if (cachedData)
            return cachedData;
    }
    const username = config.github.username;
    const repos = await fetchTopRepos(username, 10);
    cache.set("github-repos", repos, GITHUB_TTL);
    return repos;
}
