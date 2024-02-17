// Directive for the TypeScript compiler to treat this file as a module
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvexClientProvider = void 0;
// Importing necessary modules and components from external libraries
var nextjs_1 = require("@clerk/nextjs"); // Provides authentication functionality
var react_clerk_1 = require("convex/react-clerk"); // Integrates Convex with Clerk authentication
var react_1 = require("convex/react"); // Provides the Convex client and related components
var loading_1 = require("@/components/auth/loading"); // Provides the loading component
// Getting the Convex URL from the environment variables
var convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
// Creating an instance of ConvexReactClient with the Convex URL
var convex = new react_1.ConvexReactClient(convexUrl);
// Defining the ConvexClientProvider component
var ConvexClientProvider = function (_a) {
    var children = _a.children;
    return (
    // Wrapping the child components with the ClerkProvider and ConvexProviderWithClerk components
    <nextjs_1.ClerkProvider>
      <react_clerk_1.ConvexProviderWithClerk useAuth={nextjs_1.useAuth} client={convex}>
        <react_1.Authenticated>{children}</react_1.Authenticated>
        <react_1.AuthLoading>
          <loading_1.Loading />
        </react_1.AuthLoading>
      </react_clerk_1.ConvexProviderWithClerk>
    </nextjs_1.ClerkProvider>);
};
exports.ConvexClientProvider = ConvexClientProvider;
