"use client"

import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/api"
import { Button } from "@workspace/ui/components/button"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

export default function Page() {
  const users = useQuery(api.users.getMany, {} as any)
  const addUser = useMutation(api.users.addUser)

  const handleAddUser = async () => {
    try {
      await addUser({ name: "Ram" })
    } catch (error) {
      console.error("Failed to add user", error)
    }
  }

  return (
    <>
    <div className="w-full flex flex-col justify-end items-end py-2">
      <UserButton />
      <div className="py-2">
        <OrganizationSwitcher hidePersonal={true} />
      </div>
    </div>
      <div className="flex items-center justify-center p-6 bg-amber-500 text-amber-100">
        <div className="max-w-auto flex flex-col items-center justify-center gap-4 text-sm leading-loose">
          <p>Hello app/web</p>
          <div className="">
            <Button variant={"secondary"} onClick={handleAddUser}>
              Add User
            </Button>
          </div>
          <p>{JSON.stringify(users, null, 2)}</p>
        </div>
      </div>
    </>
  )
}
