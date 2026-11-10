import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(150).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

export type ContactInput = z.input<typeof contactSchema>;
