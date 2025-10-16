// This file should be placed in the `api` directory at the root of your project.
// It requires a hosting environment that supports serverless functions (e.g., Vercel, Netlify).
// You will also need to install the Supabase JS library in that environment.

// In a real project with a package.json, you would run: npm install @supabase/supabase-js
// For now, we assume the library is available in the runtime.
import { createClient } from '@supabase/supabase-js';

// Define common headers to prevent caching
const NO_CACHE_HEADERS = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
  'Pragma': 'no-cache',
  'Expires': '0',
  'Surrogate-Control': 'no-store',
};

// This is a common function signature for modern Edge Functions (Vercel, Netlify, etc.).
// It uses the standard Web API Request and Response objects.
export default async (req: Request): Promise<Response> => {
  // We only want to handle POST requests for this action.
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405, headers: { ...NO_CACHE_HEADERS, Allow: 'POST' } });
  }

  // Retrieve Supabase credentials from environment variables for security.
  // These must be set in your hosting provider's settings.
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Supabase environment variables are not set.');
    // Do not expose detailed errors to the client.
    return new Response(JSON.stringify({ error: 'Server configuration error.' }), { 
      status: 500,
      headers: NO_CACHE_HEADERS,
    });
  }

  try {
    // **Source 1: Server-Side Detection (Primary and most reliable)**
    // Extract IP from trusted headers. This is the preferred method as it's harder to spoof.
    const serverDetectedIp = req.headers.get('x-vercel-forwarded-for')?.trim()
                         || req.headers.get('x-forwarded-for')?.split(',').shift()?.trim()
                         || req.headers.get('x-real-ip')?.trim();

    // **Source 2: Client-Side Detection (Fallback)**
    // Get the IP that the client detected for itself. This is a fallback in case headers are missing.
    let clientDetectedIp: string | null = null;
    try {
      const body = await req.json();
      if (body && typeof body.clientIp === 'string') {
        clientDetectedIp = body.clientIp;
      }
    } catch (e) {
      // Body might be empty or not valid JSON, which is fine. We'll just ignore it.
    }

    // **Final IP determination**
    // Prioritize the server-detected IP. If it's not available, use the client-provided one.
    // If neither is available, fallback to 'unknown'.
    const finalIp = serverDetectedIp || clientDetectedIp || 'unknown';

    // **Diagnostic Logging: Capture the full request URL**
    // This includes the cache-busting timestamp and serves as proof of execution.
    const requestUrl = req.url;

    // Initialize the Supabase client using the secure service key.
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Insert a new row into the 'visits' table with the final determined IP address
    // and the full request URL for verification.
    const { error } = await supabase
      .from('visits')
      .insert({ 
        ip_address: finalIp,
        request_url: requestUrl // Save the unique URL as proof
      });

    if (error) {
      console.error('Supabase insert error:', error.message);
      return new Response(JSON.stringify({ error: 'Could not log visit.' }), {
        status: 500,
        headers: NO_CACHE_HEADERS,
      });
    }
    
    // Return a success response to the client.
    return new Response(JSON.stringify({ message: 'Visit logged successfully.' }), {
      status: 200,
      headers: NO_CACHE_HEADERS,
    });

  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
    console.error('Handler error:', errorMessage);
    return new Response(JSON.stringify({ error: 'An unexpected error occurred.' }), {
        status: 500,
        headers: NO_CACHE_HEADERS,
    });
  }
};

// This config is often used by platforms like Vercel to specify the runtime.
// 'edge' is lightweight and fast, perfect for a simple function like this.
export const config = {
  runtime: 'edge',
};
