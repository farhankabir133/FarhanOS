import { describe, it, expect } from "vitest";
import { sanitizeString, sanitizeEmail, isValidEmail, sanitizeObject, validateRequired } from "../../../../../supabase/functions/api/src/middleware/sanitize.ts";

describe("Sanitize Middleware", () => {
  describe("sanitizeString", () => {
    it("should strip HTML tags", () => {
      expect(sanitizeString("<script>alert('xss')</script>")).toBe("alert('xss')");
    });

    it("should trim whitespace", () => {
      expect(sanitizeString("  hello world  ")).toBe("hello world");
    });

    it("should truncate to max length", () => {
      const long = "a".repeat(200);
      expect(sanitizeString(long, 100).length).toBe(100);
    });

    it("should return empty string for non-string input", () => {
      expect(sanitizeString(null as any)).toBe("");
      expect(sanitizeString(undefined as any)).toBe("");
      expect(sanitizeString(123 as any)).toBe("");
    });

    it("should remove event handler attributes entirely", () => {
      expect(sanitizeString('hello onclick="alert(1)"')).toBe("hello");
    });

    it("should strip dangerous URL protocols leaving remaining text", () => {
      const result = sanitizeString("click here javascript:alert(1)");
      expect(result).toBe("click here alert(1)");
    });

    it("should handle multiple XSS vectors", () => {
      const input = '<script>alert(1)</script> hello onclick="alert(2)" javascript:void(0)';
      const result = sanitizeString(input);
      expect(result).not.toContain("script");
      expect(result).not.toContain("onclick");
      expect(result).not.toContain("javascript:");
    });
  });

  describe("sanitizeEmail", () => {
    it("should trim and lowercase", () => {
      expect(sanitizeEmail("  Test@Example.COM  ")).toBe("test@example.com");
    });

    it("should truncate long emails", () => {
      const longEmail = "a".repeat(400) + "@example.com";
      expect(sanitizeEmail(longEmail).length).toBe(320);
    });
  });

  describe("isValidEmail", () => {
    it("should accept valid emails", () => {
      expect(isValidEmail("user@example.com")).toBe(true);
    });

    it("should reject invalid emails", () => {
      expect(isValidEmail("not-an-email")).toBe(false);
      expect(isValidEmail("")).toBe(false);
      expect(isValidEmail("user@")).toBe(false);
    });
  });

  describe("validateRequired", () => {
    it("should validate present fields", () => {
      const result = validateRequired({ name: "test", email: "a@b.com" }, ["name", "email"]);
      expect(result.valid).toBe(true);
      expect(result.missing).toEqual([]);
    });

    it("should identify missing fields", () => {
      const result = validateRequired({ name: "" }, ["name", "email"]);
      expect(result.valid).toBe(false);
      expect(result.missing).toContain("name");
      expect(result.missing).toContain("email");
    });

    it("should identify null and undefined fields", () => {
      const result = validateRequired({ name: null, email: undefined }, ["name", "email"]);
      expect(result.valid).toBe(false);
      expect(result.missing.length).toBe(2);
    });
  });

  describe("sanitizeObject", () => {
    it("should sanitize string values", () => {
      expect(sanitizeObject({ name: "<script>xss</script>" })).toEqual({ name: "xss" });
    });

    it("should preserve non-string values", () => {
      expect(sanitizeObject({ count: 42 })).toEqual({ count: 42 });
    });

    it("should recursively sanitize nested objects", () => {
      expect(sanitizeObject({ user: { name: "  test  " } })).toEqual({ user: { name: "test" } });
    });
  });
});