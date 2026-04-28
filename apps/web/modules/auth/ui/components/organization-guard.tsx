"use client"

import { SignIn, useOrganization, useUser } from "@clerk/nextjs"
import { OrgSelectionView } from "@/modules/auth/ui/views/org-selection-view"

export const OrganizationGuard = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { isLoaded, isSignedIn } = useUser()
  const { organization } = useOrganization()

  if (!isLoaded) {
    return null
  }

  if (!isSignedIn) {
    return <SignIn />
  }

  if (!organization) {
    return <OrgSelectionView />
  }
  return <div>{children}</div>
}
