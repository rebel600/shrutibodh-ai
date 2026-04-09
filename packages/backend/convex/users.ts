import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

export const getMany = query({
  args: { name: v.optional(v.string()) },
  handler: async (ctx: any, { name }: { name: string }) => {
    const users = await ctx.db
      .query("users")
      .collect()
    return users
  },
})

export const addUser = mutation({
  args: { name: v.string() },
  handler: async (ctx: any, { name }: { name: string }) => {
    const user = await ctx.db.insert("users", { name })
    return user
  },
})