import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

export const getMany = query({
  args: { name: v.optional(v.string()) },
  handler: async (ctx: any, { name }: { name: string }) => {
    const users = await ctx.db.query("users").collect()
    return users
  },
})

export const addUser = mutation({
  args: { name: v.string() },
  handler: async (ctx: any, { name }: { name: string }) => {
    throw new Error("Testing Sentry!");
    const identity = await ctx.auth.getUserIdentity()
    if (identity === null) {
      throw new Error("Not authenticated")
    }
    const user = await ctx.db.insert("users", { name })
    return user
  },
})
