import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    // Grab the most recent camera data.
    const camera_data = await ctx.db.query("camera_data").order("desc").take(7);
    return camera_data;
  },
});

// send camera image (as storage id) to db
export const sendImage = mutation({
  args: { storageId: v.id("_storage"), crosswalk_name: v.string()},
  handler: async (ctx, args) => {
    await ctx.db.insert("camera_data", {
      storageId: args.storageId,
      crosswalk_name: args.crosswalk_name,
    });
  },
});