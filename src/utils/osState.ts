// Persists visitor-specific OS state to localStorage so the "operating system"
// feels like a real desktop that remembers you between visits: theme, open
// windows, window layout, mute, accent color, and wallpaper.

const STORAGE_KEY = 'farhanos:state:v1';

export interface PersistedOsState {
  theme?: string;
  openWindows?: string[];
  windowPositions?: Record<string, { x: number; y: number; isMaximized: boolean }>;
  muted?: boolean;
  accent?: string | null;
  wallpaper?: string | null;
}

const DEFAULT_STATE: PersistedOsState = {
  theme: 'dark',
  openWindows: ['twin'],
  windowPositions: {},
  muted: false,
  accent: null,
  wallpaper: null,
};

export function loadOsState(): PersistedOsState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE };
    const parsed = JSON.parse(raw) as Partial<PersistedOsState>;
    return { ...DEFAULT_STATE, ...parsed };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

let saveTimer: ReturnType<typeof setTimeout> | null = null;

export function saveOsState(state: PersistedOsState): void {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* quota / private mode — ignore */
    }
  }, 250);
}

export function clearOsState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
