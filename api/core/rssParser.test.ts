import { describe, it, expect } from 'vitest';
import { parseMediumRSS } from './rssParser.ts';

const SAMPLE_RSS = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<item>
  <title><![CDATA[Shipping an AI Twin: Lessons]]></title>
  <link>https://medium.com/@farhankabir133/shipping-an-ai-twin-lessons-abc123def</link>
  <guid isPermaLink="false">https://medium.com/p/abc123def</guid>
  <category><![CDATA[Artificial Intelligence]]></category>
  <category><![CDATA[Engineering]]></category>
  <pubDate>Tue, 12 Aug 2026 09:30:00 GMT</pubDate>
  <description><![CDATA[
    <figure><img src="https://cdn-images-1.medium.com/max/1024/cover.jpg"/></figure>
    <h4>Shipping an AI Twin: Lessons</h4>
    <p class="medium-feed-snippet">A field report on building a personal AI representative.</p>
    <p>Second paragraph with more detail about retrieval and streaming.</p>
  ]]></description>
</item>
<item>
  <title>Plain title without CDATA</title>
  <link>https://medium.com/@farhankabir133/plain-title-post-0fedcba987</link>
  <guid>https://medium.com/p/0fedcba987</guid>
  <category><![CDATA[productivity]]></category>
  <pubDate>Mon, 03 Aug 2026 18:00:00 GMT</pubDate>
  <description><![CDATA[<p class="medium-feed-snippet">Snippet only.</p>]]></description>
</item>
<item>
  <title><![CDATA[Minimal item with no description]]></title>
  <link>https://medium.com/@farhankabir133/minimal-item-111222333</link>
  <pubDate>not-a-date</pubDate>
</item>
</channel></rss>`;

describe('parseMediumRSS', () => {
  it('parses titles, links and ids from guid', () => {
    const stories = parseMediumRSS(SAMPLE_RSS);
    expect(stories).toHaveLength(3);

    expect(stories[0].title).toBe('Shipping an AI Twin: Lessons');
    expect(stories[0].id).toBe('abc123def');
    expect(stories[0].link).toContain('shipping-an-ai-twin');

    expect(stories[1].title).toBe('Plain title without CDATA');
    expect(stories[1].id).toBe('0fedcba987');
  });

  it('extracts the cover image and feed snippet from the description HTML', () => {
    const [first] = parseMediumRSS(SAMPLE_RSS);
    expect(first.imageUrl).toBe('https://cdn-images-1.medium.com/max/1024/cover.jpg');
    expect(first.excerpt).toBe('A field report on building a personal AI representative.');
  });

  it('strips HTML tags for content and derives read time', () => {
    const [first] = parseMediumRSS(SAMPLE_RSS);
    expect(first.content).not.toContain('<');
    expect(first.content).toContain('retrieval and streaming');
    expect(first.readTime).toMatch(/^\d+ min read$/);
    expect(parseInt(first.readTime, 10)).toBeGreaterThanOrEqual(1);
  });

  it('maps categories to the union type (AI beats Engineering)', () => {
    const stories = parseMediumRSS(SAMPLE_RSS);
    expect(stories[0].category).toBe('AI'); // both AI + Engineering tags present
    expect(stories[1].category).toBe('Productivity');
  });

  it('defaults category to Life when no tags match', () => {
    const xml = `<rss><channel><item>
      <title>X</title><link>https://medium.com/p/deadbeef01</link>
      <category><![CDATA[misc]]></category>
    </item></channel></rss>`;
    expect(parseMediumRSS(xml)[0].category).toBe('Life');
  });

  it('formats valid dates and keeps raw text for invalid ones', () => {
    const stories = parseMediumRSS(SAMPLE_RSS);
    expect(stories[0].date).toBe('Aug 12, 2026');
    expect(stories[2].date).toBe('not-a-date');
  });

  it('falls back to derived excerpt/content/id when fields are missing', () => {
    const [, , third] = parseMediumRSS(SAMPLE_RSS);
    // No description → empty snippet; id falls back to guid/link regexes then index.
    expect(third.title).toBe('Minimal item with no description');
    expect(third.id).toBe('111222333'); // from link suffix
    expect(third.content).toBe(third.title); // content falls back to title
  });

  it('caps output at 6 items', () => {
    const many = Array.from({ length: 9 }, (_, i) =>
      `<item><title>T${i}</title><link>https://medium.com/p/${String(i).padStart(8, '0')}</link></item>`
    ).join('');
    expect(parseMediumRSS(`<rss><channel>${many}</channel></rss>`)).toHaveLength(6);
  });

  it('returns an empty array for non-RSS input without throwing', () => {
    expect(parseMediumRSS('')).toEqual([]);
    expect(parseMediumRSS('<html><body>nope</body></html>')).toEqual([]);
  });
});
