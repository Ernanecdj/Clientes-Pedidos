import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xwzxrghihulmvsdkqnkz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3enhyZ2hpaHVsbXZzZGtxbmt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0NjI0MTYsImV4cCI6MjA0MzAzODQxNn0.IK5ZvpNeAYUHwWWcNqXHtmxm9wIwU67ck5eiLI-2DSk';

export const supabase = createClient(supabaseUrl, supabaseKey);