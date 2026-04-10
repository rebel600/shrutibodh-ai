"use client"

import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/api"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  const users = useQuery(api.users.getMany, {} as any)
  const addUser = useMutation(api.users.addUser)

  const handleAddUser = async () => {
    try {
      await addUser({ name: "Kavita" })
    } catch (error) {
      console.error("Failed to add user", error)
    }
  }

  return (
    <div className="flex min-h-screen p-6 text-amber-500">
      <div className="max-w-auto flex flex-col items-center justify-center gap-4 bg-amber-100 text-sm leading-loose">
        <p>Hello app/widget</p>
        <div className="">
          <Button
            variant={"secondary"}
            onClick={handleAddUser}
          >
            Add User
          </Button>
        </div>
        <p>{JSON.stringify(users, null, 2)}</p>
      </div>
    </div>
  )
}
