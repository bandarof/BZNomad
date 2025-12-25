import { builder } from '@builder.io/sdk';

// Initialize with your EXACT public key
const API_KEY = '2fcfe1b955134aacad7b3c67770584fe';
builder.init(API_KEY);

// Export the initialized instance
export { builder, API_KEY };
