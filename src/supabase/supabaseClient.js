import { createClient } from "@supabase/supabase-js";
import conf from "../conf/conf";
export class Supabase {
  supabase;
  client = createClient;
  constructor() {
    this.supabase = this.client(conf.supaBaseUrl, conf.supaBaseAnonKey);
  }

  add() {
    console.log(this.supabase);
  }
}

const supabaseService = new Supabase();
supabaseService.add();

export default supabaseService;
