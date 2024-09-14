import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { format } from "path";

// The schema is entirely optional.
// You can delete this file (schema.ts) and the
// app will continue to work.
// The schema provides more precise TypeScript types.
export default defineSchema({
  messages: defineTable({
    author: v.string(),
    body: v.string(),
  }),
  camera_data: defineTable({
    storageId: v.id("_storage"),
    author: v.string(),
  }),
});

