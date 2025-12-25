"use client";
import { BuilderComponent } from '@builder.io/react';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Builder.io Integration Test</h1>
      <p className="mb-8 text-gray-600">
        Public Key: <code className="bg-gray-100 px-2 py-1 rounded">2fcfe1b955134aacad7b3c67770584fe</code>
      </p>
      
      <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded">
        <h2 className="text-xl font-semibold mb-2">Status Check</h2>
        <p>If Builder.io is connected, content will appear below:</p>
      </div>
      
      <div className="border-2 border-gray-300 rounded-lg p-8 min-h-[400px]">
        <BuilderComponent model="page" />
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded text-sm">
        <p>Server: <code>http://localhost:3000</code></p>
        <p>Network: <code>http://192.168.8.100:3000</code></p>
      </div>
    </main>
  );
}
