class LRUNode {
    constructor(key, value, ttlMs) {
        this.prev = null;
        this.next = null;
        this.key = key;
        this.value = value;
        this.expiresAt = Date.now() + ttlMs;
    }
    get isExpired() {
        return Date.now() > this.expiresAt;
    }
}
export class Cache {
    constructor(maxEntries = 100) {
        this.map = new Map();
        this.head = null;
        this.tail = null;
        this.maxEntries = maxEntries;
    }
    get(key) {
        const node = this.map.get(key);
        if (!node)
            return null;
        if (node.isExpired) {
            this._removeNode(node);
            this.map.delete(key);
            return null;
        }
        this._moveToFront(node);
        return node.value;
    }
    set(key, value, ttlMs) {
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
    _addToFront(node) {
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
    _removeNode(node) {
        if (node.prev) {
            node.prev.next = node.next;
        }
        else {
            this.head = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        else {
            this.tail = node.prev;
        }
        node.prev = null;
        node.next = null;
    }
    _moveToFront(node) {
        this._removeNode(node);
        this._addToFront(node);
    }
    _evictLRU() {
        if (!this.tail)
            return;
        const lru = this.tail;
        this._removeNode(lru);
        this.map.delete(lru.key);
    }
}
export const cache = new Cache(100);
