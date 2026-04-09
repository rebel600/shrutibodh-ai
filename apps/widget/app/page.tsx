"use client"

import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/api"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  const users = useQuery(api.users.getMany, { name: "test" })
  const addUser = useMutation(api.users.addUser)

  return (
    <div className="flex min-h-screen p-6 text-accent">
      <div className="flex max-w-auto  flex-col gap-4 text-sm justify-center items-center leading-loose bg-amber-100">
        <p>Hello app/widget</p>
        <div className="">
        <Button variant={"secondary"} onClick={() => addUser({ name: "Kavita" })}>
          Add User
        </Button>
        </div>
        <p>{JSON.stringify(users, null, 2)}</p>
      </div>
    </div>
  )
}
