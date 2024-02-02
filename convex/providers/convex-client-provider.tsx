// Directive for the TypeScript compiler to treat this file as a module
"use client";

// Importing necessary modules and components from external libraries
import { ClerkProvider, useAuth } from "@clerk/nextjs"; // Provides authentication functionality
import { ConvexProviderWithClerk } from "convex/react-clerk"; // Integrates Convex with Clerk authentication
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react"; // Provides the Convex client and related components

import { Loading } from "@/components/auth/loading"; // Provides the loading component

// Defining the props for the ConvexClientProvider component
interface ConvexClientProviderProps {
  children: React.ReactNode; // Represents the child components that will be wrapped by the ConvexClientProvider
}

// Getting the Convex URL from the environment variables
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

// Creating an instance of ConvexReactClient with the Convex URL
const convex = new ConvexReactClient(convexUrl);

// Defining the ConvexClientProvider component
export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    // Wrapping the child components with the ClerkProvider and ConvexProviderWithClerk components
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
