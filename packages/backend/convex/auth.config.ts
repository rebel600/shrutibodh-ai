import { AuthConfig } from "convex/server"

const clerkIssuerDomain = process.env.CLERK_JWT_ISSUER_DOMAIN

if (!clerkIssuerDomain) {
  throw new Error("CLERK_JWT_ISSUER_DOMAIN is not set")
}

export default {
  providers: [
    {
      // Replace with your Clerk Frontend API URL
      // or with `process.env.CLERK_JWT_ISSUER_DOMAIN`
      // and configure CLERK_JWT_ISSUER_DOMAIN on the Convex Dashboard
      // See https://docs.convex.dev/auth/clerk#configuring-dev-and-prod-instances
      domain: clerkIssuerDomain,
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig
