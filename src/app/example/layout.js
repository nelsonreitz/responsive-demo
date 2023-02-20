"use client";

import { Inter } from "@next/font/google";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const DynamicWidth = dynamic(() => import("@/components/width"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="relative antialiased">
        <div className="pointer-events-none border-x border-blue-500/50 absolute left-0 right-0 top-0 bottom-0 max-w-[1440px] mx-auto h-full w-full" />
        <div>
          <DynamicWidth />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
