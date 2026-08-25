import { describe, it, expect } from 'vitest';
import {
  TOOL_SCHEMAS,
  SERVER_TOOL_NAMES,
  validateClientAction,
} from './tools.ts';

describe('TOOL_SCHEMAS', () => {
  it('declares every client action and server tool exactly once', () => {
    const names = TOOL_SCHEMAS.map((t) => t.function.name);
    expect(names).toEqual([
      'open_os_window',
      'switch_os_theme',
      'open_external_link',
      'get_live_github_repos',
      'get_recent_medium_stories',
    ]);
    expect(SERVER_TOOL_NAMES.size).toBe(2);
  });
});

describe('validateClientAction', () => {
  it('accepts a valid open_os_window call (object args)', () => {
    expect(validateClientAction('open_os_window', { window: 'projects' })).toEqual({
      type: 'open_window',
      window: 'projects',
    });
  });

  it('accepts JSON-encoded args from the model', () => {
    expect(validateClientAction('switch_os_theme', '{"theme":"cyberpunk"}')).toEqual({
      type: 'switch_theme',
      theme: 'cyberpunk',
    });
  });

  it('rejects unknown windows, themes, and tools', () => {
    expect(validateClientAction('open_os_window', { window: '<script>' })).toBeNull();
    expect(validateClientAction('open_os_window', { window: 'not-a-window' })).toBeNull();
    expect(validateClientAction('switch_os_theme', { theme: 'neon-rainbow' })).toBeNull();
    expect(validateClientAction('delete_all_data', {})).toBeNull();
    expect(validateClientAction(null, {})).toBeNull();
  });

  it('rejects malformed argument payloads', () => {
    expect(validateClientAction('open_os_window', '{broken json')).toBeNull();
    expect(validateClientAction('open_os_window', null)).toBeNull();
    expect(validateClientAction('open_os_window', 'just a string')).toBeNull();
  });

  it('allowlists exact profile URLs for open_external_link', () => {
    expect(validateClientAction('open_external_link', { url: 'https://github.com/farhankabir133' })).toEqual({
      type: 'open_link',
      url: 'https://github.com/farhankabir133',
    });
    expect(
      validateClientAction('open_external_link', {
        url: 'https://github.com/farhankabir133/TypeRush/issues/12',
      })
    ).toMatchObject({ type: 'open_link' });
  });

  it('blocks non-allowlisted or unsafe URLs', () => {
    expect(validateClientAction('open_external_link', { url: 'http://github.com/farhankabir133' })).toBeNull();
    expect(validateClientAction('open_external_link', { url: 'https://evil.example.com/x' })).toBeNull();
    expect(validateClientAction('open_external_link', { url: 'javascript:alert(1)' })).toBeNull();
    expect(validateClientAction('open_external_link', { url: 'https://github.com/someone-else/repo' })).toBeNull();
    expect(validateClientAction('open_external_link', { url: 42 })).toBeNull();
  });
});
