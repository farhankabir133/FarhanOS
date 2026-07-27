class LRUNode {
  key: string;
  value: unknown;
  expiresAt: number;
  prev: LRUNode | null = null;
  next: LRUNode | null = null;

  constructor(key: string, value: unknown, ttlMs: number) {
    this.key = key;
    this.value = value;
    this.expiresAt = Date.now() + ttlMs;
  }

  get isExpired(): boolean {
    return Date.now() > this.expiresAt;
  }
}

export class Cache {
  private map = new Map<string, LRUNode>();
  private head: LRUNode | null = null;
  private tail: LRUNode | null = null;
  private maxEntries: number;

  constructor(maxEntries: number = 100) {
    this.maxEntries = maxEntries;
  }

  get<T>(key: string): T | null {
    const node = this.map.get(key);
    if (!node) return null;
    if (node.isExpired) {
      this._removeNode(node);
      this.map.delete(key);
      return null;
    }
    this._moveToFront(node);
    return node.value as T;
  }

  set<T>(key: string, value: T, ttlMs: number): void {
    const existing = this.map.get(key);
    if (existing) {
      this._removeNode(existing);
      this.map.delete(key);
    }

    if (this.map.size >= this.maxEntries) {
      this._evictLRU();
    }

    const node = new LRUNode(key, value, ttlMs);
    this.map.set(key, node);
    this._addToFront(node);
  }

  private _addToFront(node: LRUNode): void {
    node.prev = null;
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  }

  private _removeNode(node: LRUNode): void {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
    node.prev = null;
    node.next = null;
  }

  private _moveToFront(node: LRUNode): void {
    this._removeNode(node);
    this._addToFront(node);
  }

  private _evictLRU(): void {
    if (!this.tail) return;
    const lru = this.tail;
    this._removeNode(lru);
    this.map.delete(lru.key);
  }
}

export const cache = new Cache(100);