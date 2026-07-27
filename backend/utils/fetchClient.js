export async function fetchClient(url, options, timeoutMs = 30000, retries = 2) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    const attemptFetch = async (attempt) => {
        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal,
            });
            clearTimeout(timeoutId);
            if (!response.ok && response.status >= 500 && attempt < retries) {
                const backoffMs = Math.pow(2, attempt) * 1000;
                await new Promise((resolve) => setTimeout(resolve, backoffMs));
                return attemptFetch(attempt + 1);
            }
            return response;
        }
        catch (err) {
            clearTimeout(timeoutId);
            if (typeof err === "object" &&
                err !== null &&
                "name" in err &&
                err.name === "AbortError") {
                throw new Error(`Request to ${url} timed out after ${timeoutMs}ms`);
            }
            if (attempt < retries) {
                const backoffMs = Math.pow(2, attempt) * 1000;
                await new Promise((resolve) => setTimeout(resolve, backoffMs));
                return attemptFetch(attempt + 1);
            }
            throw err;
        }
    };
    return attemptFetch(0);
}
