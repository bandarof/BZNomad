"use client"; // BuilderComponent needs client-side rendering

import { BuilderComponent } from '@builder.io/react';

export default function BuilderTestPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Builder.io Test Page</h1>
      <p className="mb-6 text-gray-600">This page is ready for Builder.io content.</p>
      <div className="border-2 border-dashed border-gray-300 p-8 rounded-lg">
        <BuilderComponent model="page" />
      </div>
      <p className="mt-6 text-sm text-gray-500">
        If Builder.io is connected, your content will appear in the box above.
      </p>
    </div>
  );
}
