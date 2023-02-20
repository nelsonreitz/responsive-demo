"use client";

export default function Colonnes() {
  return (
    <div className="space-y-32">
      <div className="space-y-8">
        <div className="mx-auto max-w-screen-2xl bg-green-400/30 px-6">
          <div className="h-32 bg-red-200">
            <div className="grid grid-cols-12 gap-x-6">
              {[...Array(12)].map((i) => (
                <div key={i} className="h-32 bg-red-300"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-2xl bg-green-400/30 px-6">
          <div className="h-32 bg-red-200">
            <div className="grid grid-cols-4 gap-x-6">
              {[...Array(4)].map((i) => (
                <div key={i} className="h-32 bg-red-300"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-2xl bg-green-400/30 px-6">
          <div className="h-32 bg-red-200">
            <div className="grid grid-cols-3 gap-x-6">
              {[...Array(3)].map((i) => (
                <div key={i} className="h-32 bg-red-300"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-2xl bg-green-400/30 px-6">
          <div className="h-32 bg-red-200">
            <div className="grid grid-cols-2 gap-x-6">
              {[...Array(2)].map((i) => (
                <div key={i} className="h-32 bg-red-300"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="mx-auto max-w-screen-xl bg-green-400/30 px-6">
          <div className="h-32 bg-red-200">
            <div className="grid grid-cols-12 gap-x-6">
              {[...Array(12)].map((i) => (
                <div key={i} className="h-32 bg-red-300"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-lg bg-green-400/30 px-6">
          <div className="h-32 bg-red-200">
            <div className="grid grid-cols-4 gap-x-6">
              {[...Array(4)].map((i) => (
                <div key={i} className="h-32 bg-red-300"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-md bg-green-400/30 px-6">
          <div className="h-32 bg-red-200">
            <div className="grid grid-cols-3 gap-x-6">
              {[...Array(3)].map((i) => (
                <div key={i} className="h-32 bg-red-300"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-sm bg-green-400/30 px-6">
          <div className="h-32 bg-red-200">
            <div className="grid grid-cols-2 gap-x-6">
              {[...Array(2)].map((i) => (
                <div key={i} className="h-32 bg-red-300"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
