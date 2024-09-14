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
    storageId: v.id("_storage"),  // storageId of images of pedestrians who violate rules
    crosswalk_name: v.string(), // implement later --> to identify different crosswalks/intersections
  }),
  crosser_data: defineTable({
    cross_duration: v.float64(),  // defined as the amount of time (s) it takes for someone to enter and leave the intersection
    arrival_time: v.float64(),  // the time (s) relative to the start of crosswalk countdown that pedestrians arrive at (+ve or zero)
    cross_countdown: v.float64(), // the amount of time a given crosswalk allows pedestrians to cross (s)
  }),
});

