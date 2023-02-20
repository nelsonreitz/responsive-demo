"use client";

import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Width() {
  const { width } = useWindowDimensions();

  return (
    <div className="fixed top-12 w-full text-center text-4xl font-bold">
      width: <span className="font-mono">{width}px</span>
    </div>
  );
}
