import { configuration } from '../config/config.ts';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(configuration.supabase.url, configuration.supabase.key);