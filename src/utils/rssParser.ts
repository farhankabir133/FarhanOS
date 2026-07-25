export interface MediumStory {
  id: string;
  title: string;
  category: 'AI' | 'Engineering' | 'Productivity' | 'Research' | 'Life' | 'Startups' | 'Design' | 'Philosophy';
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  link: string;
  imageUrl: string;
}

export function parseMediumRSS(xmlText: string): MediumStory[] {
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const matches = [...xmlText.matchAll(itemRegex)];
  const items = matches.slice(0, 6);

  return items.map((match, idx) => {
    const item = match[1];

    const titleMatch = item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || item.match(/<title>([\s\S]*?)<\/title>/);
    const title = titleMatch ? titleMatch[1].trim() : '';

    const linkMatch = item.match(/<link>([\s\S]*?)<\/link>/);
    const link = linkMatch ? linkMatch[1].trim() : '';

    const pubDateMatch = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const rawDate = pubDateMatch ? pubDateMatch[1].trim() : '';
    let formattedDate = rawDate;
    try {
      const d = new Date(rawDate);
      if (!isNaN(d.getTime())) {
        formattedDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      }
    } catch (_e) {
    }

    const descMatch = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || item.match(/<description>([\s\S]*?)<\/description>/);
    let snippet = '';
    let imageUrl = '';
    let cleanContent = '';

    if (descMatch) {
      const descHtml = descMatch[1];

      const imgMatch = descHtml.match(/<img[^>]+src=["']([^"']+)["']/);
      if (imgMatch) {
        imageUrl = imgMatch[1];
      }

      const snippetMatch = descHtml.match(/<p class="medium-feed-snippet">([\s\S]*?)<\/p>/);
      if (snippetMatch) {
        snippet = snippetMatch[1].trim();
      }

      cleanContent = descHtml.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

      if (!snippet) {
        snippet = cleanContent.slice(0, 150) + (cleanContent.length > 150 ? '...' : '');
      }
    }

    const categories: string[] = [];
    const catRegex = /<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g;
    let catMatch;
    while ((catMatch = catRegex.exec(item)) !== null) {
      categories.push(catMatch[1]);
    }

    let finalCategory: MediumStory['category'] = 'Life';
    const lowercaseCategories = categories.map(c => c.toLowerCase());
    if (lowercaseCategories.some(c => c.includes('ai') || c.includes('artificial') || c.includes('gpt') || c.includes('llm'))) {
      finalCategory = 'AI';
    } else if (lowercaseCategories.some(c => c.includes('dev') || c.includes('coding') || c.includes('program') || c.includes('software') || c.includes('architecture') || c.includes('engineering'))) {
      finalCategory = 'Engineering';
    } else if (lowercaseCategories.some(c => c.includes('productiv') || c.includes('work') || c.includes('career') || c.includes('growth'))) {
      finalCategory = 'Productivity';
    } else if (lowercaseCategories.some(c => c.includes('research') || c.includes('science') || c.includes('clinic'))) {
      finalCategory = 'Research';
    } else if (lowercaseCategories.some(c => c.includes('design') || c.includes('ux') || c.includes('ui'))) {
      finalCategory = 'Design';
    } else if (lowercaseCategories.some(c => c.includes('startup') || c.includes('business') || c.includes('saas'))) {
      finalCategory = 'Startups';
    } else if (lowercaseCategories.some(c => c.includes('philosoph') || c.includes('think'))) {
      finalCategory = 'Philosophy';
    }

    const wordCount = cleanContent.split(/\s+/).length;
    const readTimeMins = Math.max(1, Math.ceil(wordCount / 225));
    const readTime = `${readTimeMins} min read`;

    const guidMatch = item.match(/<guid[^>]*>([\s\S]*?)<\/guid>/);
    const rawGuid = guidMatch ? guidMatch[1].trim() : '';
    const guidIdMatch = rawGuid.match(/\/p\/([a-f0-9]+)$/) || link.match(/-([a-f0-9]+)$/) || rawGuid.match(/\/p\/([a-f0-9]+)/);
    const id = guidIdMatch ? guidIdMatch[1] : `medium-${idx}`;

    return {
      id,
      title,
      category: finalCategory,
      readTime,
      date: formattedDate,
      excerpt: snippet,
      content: cleanContent || snippet || title,
      link,
      imageUrl
    };
  });
}