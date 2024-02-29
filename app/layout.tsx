import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*
        The ConvexClientProvider component is used here to wrap the children prop.
        This component sets up a client for interacting with a Convex API.
        The children prop allows you to insert any JSX or component between the opening and closing tags of the parent component.
        Whatever is placed between <ConvexClientProvider> and </ConvexClientProvider> in your JSX code will be passed to ConvexClientProvider as its children prop.
      */}
        <ConvexClientProvider>
          <ClerkProvider>{children}</ClerkProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
