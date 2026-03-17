import { configuration } from '../config/config.js';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(configuration.supabase.url, configuration.supabase.key);