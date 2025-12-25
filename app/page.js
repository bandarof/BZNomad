"use client";
import { BuilderComponent } from '@builder.io/react';
import { builder, API_KEY } from '../lib/builder-init';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Builder.io Test</h1>
      <p className="mb-6">API Key: {API_KEY}</p>
      
      <div className="border-2 border-gray-300 p-4 rounded">
        {/* Explicitly pass the API key to BuilderComponent */}
        <BuilderComponent 
          model="page" 
          apiKey={API_KEY}
        />
      </div>
    </div>
  );
}
