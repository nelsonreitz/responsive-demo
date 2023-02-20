"use client";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="mx-auto bg-green-400/30 px-6">
        <div className="h-32 bg-red-200 "></div>
      </div>
      <div className="mx-auto max-w-screen-2xl bg-green-400/30 px-6">
        <div className="h-32 bg-red-200 flex items-center justify-center">
          max-width: 1536px
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl bg-green-400/30 px-6">
        <div className="h-32 bg-red-200 flex items-center justify-center">
          max-width: 1280px
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg bg-green-400/30 px-6">
        <div className="h-32 bg-red-200 flex items-center justify-center">
          max-width: 1024px
        </div>
      </div>
      <div className="mx-auto max-w-screen-md bg-green-400/30 px-6">
        <div className="h-32 bg-red-200 flex items-center justify-center">
          max-width: 768px
        </div>
      </div>
      <div className="mx-auto max-w-screen-sm bg-green-400/30 px-6">
        <div className="h-32 bg-red-200 flex items-center justify-center">
          max-width: 640px
        </div>
      </div>
    </div>
  );
}
