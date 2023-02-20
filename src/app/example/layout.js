"use client";

import { Inter } from "@next/font/google";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { width } = useWindowDimensions();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="relative">
        <div className="pointer-events-none border-x border-blue-500/50 absolute left-0 right-0 top-0 bottom-0 max-w-[1440px] mx-auto h-full w-full" />
        <div>
          <div className="fixed top-12 w-full text-center text-4xl font-bold">
            width: <span className="font-mono">{width}px</span>
          </div>

          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
