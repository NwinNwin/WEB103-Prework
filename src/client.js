import { createClient } from "@supabase/supabase-js";

const URL = "https://fedtytbtmxflagumfygf.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlZHR5dGJ0bXhmbGFndW1meWdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxNTU5MTcsImV4cCI6MjAwODczMTkxN30.y8YJwQ7vPnVBuhMIRBUqjUbLBZGPxUQLaha3f5YsoIM";

export const supabase = createClient(URL, API_KEY);
