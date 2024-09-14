import { query, mutation } from "./_generated/server";
import { v } from "convex/values";


export const list = query({
  args: {},
  handler: async (ctx) => {
    // Grab the most recent crosser data.
    const crosser_data = await ctx.db.query("crosser_data").order("desc").take(100);
    return crosser_data;
  },
});

export const send = mutation({
  args: { cross_duration: v.float64(), arrival_time: v.float64(), cross_countdown: v.float64() },
  handler: async (ctx, { cross_duration, arrival_time, cross_countdown}) => {
    // Send a new message
    await ctx.db.insert("crosser_data", { cross_duration, arrival_time, cross_countdown});
  },
});
