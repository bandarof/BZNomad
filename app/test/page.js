"use client";
import { BuilderComponent } from '@builder.io/react';

export default function TestPage() {
  return (
    <div>
      <h1>Simple Builder.io Test</h1>
      <BuilderComponent model="page" />
    </div>
  );
}
