"use client";
import { useEffect, useState } from 'react';
import { BuilderComponent, builder } from '@builder.io/react';

// Initialize Builder.io
const API_KEY = '2fcfe1b955134aacad7b3c67770584fe';
builder.init(API_KEY);

export default function BuilderWrapper() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('BuilderWrapper: useEffect running');
    console.log('Builder.apiKey:', builder.apiKey);
    
    // Fetch content
    builder.get('page', { url: '/' })
      .then(data => {
        console.log('Builder fetched data:', data);
        setContent(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Builder fetch error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-2 text-gray-600">Loading Builder.io content...</p>
        <p className="text-sm text-gray-500">API Key: {builder.apiKey || 'checking...'}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 border border-red-300 bg-red-50 rounded">
        <h3 className="text-red-700 font-bold">Error loading content</h3>
        <p className="text-red-600">{error}</p>
        <p className="text-sm mt-2">API Key status: {builder.apiKey ? '✓ Set' : '✗ Not set'}</p>
      </div>
    );
  }

  return <BuilderComponent model="page" content={content} />;
}
