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

// Define a mutation that expects a storage ID
export default mutation({
  // Define the input validation schema
  args: {
    cross_duration: v.float64(),  // defined as the amount of time (s) it takes for someone to enter and leave the intersection
    // arrival_time: v.float64(),  // the time (s) relative to the start of crosswalk countdown that pedestrians arrive at (+ve or zero)
    // cross_countdown: v.float64(), the amount of time a given crosswalk allows pedestrians to cross (s)
  },
  
  // Mutation logic
  handler: async ({ db }, { cross_duration }) => {
    // You can now safely use `storageId`, knowing it's valid
    
    const insertedId = await db.insert("crosser_data", {
      cross_duration,
    });

    return { success: true, insertedId };
  }
});


export const addCrossDuration = mutation({
  args: { cross_duration: v.float64() },
  handler: async (ctx, { cross_duration }) => {
    // Send a new message.
    await ctx.db.insert("crosser_data", { cross_duration });
  },
});


const url : string = process.env.VITE_CONVEX_URL +"/api/mutation";

// export const send = mutation({
//   args: { cross_duration: v.float64() },
//   handler: async (ctx, { cross_duration }) => {
//     // Send a new message
//     await ctx.db.insert("crosser_data", { cross_duration });
//   },
// });
