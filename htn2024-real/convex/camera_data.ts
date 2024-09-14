import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    // Grab the most recent messages.
    const camera_data = await ctx.db.query("camera_data").order("desc").take(100);
    return camera_data;
  },
});

export const send = mutation({
  args: { image_description: v.string() },
  handler: async (ctx, { image_description }) => {
    // Send a new image_data.
    await ctx.db.insert("camera_data", {image_description});
  },
});

export const generateUploadUrl = mutation(async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  });