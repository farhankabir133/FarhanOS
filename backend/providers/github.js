import { fetchClient } from "../utils/fetchClient.js";
import { config } from "../config/env.js";
export async function fetchTopRepos(username, limit) {
    const apiKey = config.groq.apiKey;
    const url = `https://api.github.com/users/${username}/repos?sort=stars&per_page=100`;
    const response = await fetchClient(url, {
        headers: {
            "Accept": config.github.acceptHeader,
            "User-Agent": config.github.userAgent,
            ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
        },
    }, config.github.timeoutMs, 1);
    if (!response.ok) {
        if (response.status === 403) {
            throw new Error("GitHub API rate limit exceeded.");
        }
        throw new Error(`GitHub API failed with status: ${response.status}`);
    }
    const repos = await response.json();
    return repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, limit)
        .map((repo) => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
        topics: repo.topics || [],
        homepage: repo.homepage,
    }));
}
