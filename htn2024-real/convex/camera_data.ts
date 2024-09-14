import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    // Grab the most recent messages.
    const camera_data = await ctx.db.query("camera_data").order("desc").take(100);
    return camera_data;
  },
});

export const sendImage = mutation({
  args: { storageId: v.id("_storage"), author: v.string()},
  handler: async (ctx, args) => {
    await ctx.db.insert("camera_data", {
      storageId: args.storageId,
      author: args.author,
    });
  },
});