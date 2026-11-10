import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

describe("contact form rules", () => {
  it("requires a name", () => {
    expect(contactSchema.safeParse({ name: " ", email: "a@b.co" }).success).toBe(false);
  });
  it("requires a valid email", () => {
    expect(contactSchema.safeParse({ name: "Ana", email: "not-an-email" }).success).toBe(false);
  });
  it("accepts name and email with company and message optional", () => {
    expect(contactSchema.safeParse({ name: "Ana", email: "ana@example.com" }).success).toBe(true);
  });
});
