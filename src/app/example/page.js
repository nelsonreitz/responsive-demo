"use client";

export default function Example() {
  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-screen-2xl bg-green-400/30 px-4 sm:px-8 xl:px-10">
        <div className="h-48 bg-gray-100 flex items-center justify-center">
          Header + nav
        </div>
      </div>
      <div className="mx-auto bg-green-400/30">
        <div className="h-80 bg-red-200 flex items-center justify-center">
          Image pleine largeur
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl bg-green-400/30 px-4 sm:px-8 xl:px-10">
        <div className="bg-gray-100">
          <p className="flex items-center justify-center h-48">
            Layout multi-colonnes
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-24 bg-gray-200" />
            <div className="h-24 bg-gray-200" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-md bg-green-400/30 px-4 sm:px-8 xl:px-10">
        <div className="h-96 bg-gray-100 flex items-center justify-center">
          Contenu texte sur 1 colonne
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg bg-green-400/30 px-4 sm:px-8 xl:px-10">
        <div className="h-48 bg-gray-100 flex items-center justify-center">
          Contenu plus large sur 1 colonne
        </div>
      </div>
      <div className="mx-auto max-w-screen-md bg-green-400/30 px-4 sm:px-8 xl:px-10">
        <div className="h-96 bg-gray-100 flex items-center justify-center">
          Contenu texte sur 1 colonne
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl bg-green-400/30 px-4 sm:px-8 xl:px-10">
        <div className="bg-gray-100">
          <p className="flex items-center justify-center h-48">
            Layout multi-colonnes
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="h-24 bg-gray-200" />
            <div className="h-24 bg-gray-200" />
            <div className="h-24 bg-gray-200" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl bg-green-400/30 px-4 sm:px-8 xl:px-10">
        <div className="h-48 bg-gray-100 flex items-center justify-center">
          Footer
        </div>
      </div>
    </div>
  );
}
