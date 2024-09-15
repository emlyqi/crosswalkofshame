import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    // Grab the most recent camera data.
    const camera_data = await ctx.db.query("camera_data").order("desc").take(7);
    return camera_data;
  },
});

export const data = query({
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
      storageId: v.string(),  // Validate that the input is a valid storage ID
      crosswalk_name: v.string(),      // Optionally include other validated inputs
    },
    
    // Mutation logic
    handler: async ({ db }, { storageId, crosswalk_name }) => {
      // You can now safely use `storageId`, knowing it's valid
      
      const insertedId = await db.insert("camera_data", {
        storageId,
        crosswalk_name,
      });
  
      return { success: true, insertedId };
    }
  });

  export const addImage = mutation({
    args: { storageId: v.string(), crosswalk_name: v.string() },
    handler: async (ctx, { storageId, crosswalk_name }) => {
      // Send a new message.
      await ctx.db.insert("camera_data", { storageId, crosswalk_name });
    },
  });



