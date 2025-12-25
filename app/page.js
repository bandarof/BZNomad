"use client";
import BuilderWrapper from '../components/BuilderWrapper';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Builder.io Test Page</h1>
      <p className="mb-6">Testing API Key: 2fcfe1b955134aacad7b3c67770584fe</p>
      
      <div className="border-2 border-gray-300 rounded-lg p-8 min-h-[400px]">
        <BuilderWrapper />
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h2 className="text-lg font-semibold mb-2">Debug Controls</h2>
        <button 
          onClick={() => {
            console.log('=== Manual Debug ===');
            console.log('window.Builder:', window.Builder);
            console.log('window.Builder.apiKey:', window.Builder?.apiKey);
            console.log('window.location:', window.location.href);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Log Builder State to Console
        </button>
      </div>
    </div>
  );
}
