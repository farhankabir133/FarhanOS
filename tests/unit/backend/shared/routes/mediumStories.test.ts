import { describe, it, expect, vi, afterEach } from "vitest";
import { parseMediumRSS } from "../../../../../src/backend/utils/rssParser.js";

vi.mock("../../../../../src/backend/utils/fetchClient.js", async () => ({
  fetchClient: vi.fn().mockResolvedValue(new Response("")),
}));

describe("RSS Parser", () => {
  const sampleXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Farhan Kabir - Medium</title>
    <item>
      <title><![CDATA[My Amazing Article]]></title>
      <link>https://medium.com/p/abc123</link>
      <pubDate>Mon, 01 Jan 2024 00:00:00 GMT</pubDate>
      <description><![CDATA[<p class="medium-feed-snippet">This is a test excerpt.</p><img src="https://example.com/image.png" alt="test"><p>Full article content with more text about NLP and machine learning research.</p>]]></description>
      <category><![CDATA[AI]]></category>
      <guid isPermaLink="false">/p/abc123</guid>
    </item>
    <item>
      <title>Another Great Post</title>
      <link>https://medium.com/p/def456</link>
      <pubDate>Tue, 02 Jan 2024 00:00:00 GMT</pubDate>
      <description><![CDATA[<p>Just some content without a snippet class.</p>]]></description>
      <guid>/p/def456</guid>
    </item>
  </channel>
</rss>`;

  it("should parse RSS items into MediumStory objects", () => {
    const stories = parseMediumRSS(sampleXml);
    expect(stories.length).toBe(2);
  });

  it("should extract the title from CDATA sections", () => {
    const stories = parseMediumRSS(sampleXml);
    expect(stories[0].title).toBe("My Amazing Article");
  });

  it("should extract the title from plain text sections", () => {
    const stories = parseMediumRSS(sampleXml);
    expect(stories[1].title).toBe("Another Great Post");
  });

  it("should extract the link", () => {
    const stories = parseMediumRSS(sampleXml);
    expect(stories[0].link).toBe("https://medium.com/p/abc123");
  });

  it("should extract the extracted image URL from description", () => {
    const stories = parseMediumRSS(sampleXml);
    expect(stories[0].imageUrl).toBe("https://example.com/image.png");
  });

  it("should extract category from CDATA", () => {
    const stories = parseMediumRSS(sampleXml);
    expect(stories[0].category).toBe("AI");
  });

  it("should extract the excerpt from medium-feed-snippet class", () => {
    const stories = parseMediumRSS(sampleXml);
    expect(stories[0].excerpt).toBe("This is a test excerpt.");
  });

  it("should generate a read time estimate", () => {
    const stories = parseMediumRSS(sampleXml);
    expect(stories[0].readTime).toMatch(/\d+ min read/);
  });

  it("should extract an ID from the GUID", () => {
    const stories = parseMediumRSS(sampleXml);
    expect(stories[0].id).toBe("abc123");
  });

  it("should handle empty input gracefully", () => {
    const stories = parseMediumRSS("");
    expect(stories.length).toBe(0);
  });

  it("should default category to Life when no matching category exists", () => {
    const xmlWithNoCategory = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Test</title>
    <item>
      <title>Untitled</title>
      <link>https://example.com/p/xyz789</link>
      <pubDate>Mon, 01 Jan 2024 00:00:00 GMT</pubDate>
      <description><![CDATA[<p>Some random content.</p>]]></description>
      <guid isPermaLink="false">/p/xyz789</guid>
    </item>
  </channel>
</rss>`;
    const stories = parseMediumRSS(xmlWithNoCategory);
    expect(stories[0].category).toBe("Life");
  });

  it("should limit to 6 items maximum", () => {
    const manyItems = [];
    for (let i = 0; i < 10; i++) {
      manyItems.push(`<item><title>Item ${i}</title><link>https://example.com/p/${i}</link><pubDate>Mon, 01 Jan 2024 00:00:00 GMT</pubDate><description><![CDATA[<p>Content ${i}.]]></description><guid>/p/${i}</guid></item>`);
    }
    const xml = `<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>Test</title>${manyItems.join("")}</channel></rss>`;
    const stories = parseMediumRSS(xml);
    expect(stories.length).toBe(6);
  });
});