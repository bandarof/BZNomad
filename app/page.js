"use client";
import { BuilderComponent } from '@builder.io/react';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Builder.io Test</h1>
      <BuilderComponent model="page" />
    </div>
  );
}
