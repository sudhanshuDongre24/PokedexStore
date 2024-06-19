import { createClient } from "@supabase/supabase-js";
import conf from "../conf/conf";
export class Supabase {
  supabase;
  client = createClient;
  constructor() {
    this.supabase = this.client(conf.supaBaseUrl, conf.supaBaseAnonKey);
  }

  async getPokemonData() {
    try {
      return await this.supabase.from("PokemonData").select("*");
    } catch (error) {
      console.log("Supabase Service :: getPokemonData :: error ", error);
    }
  }

  async updatePokemonData(id, pokemonData) {
    try {
      await this.supabase
        .from("PokemonData")
        .update({ data: pokemonData })
        .eq("id", id)
        .select();
    } catch (error) {
      console.log("Supabase Service :: updatePokemon :: error ", error);
    }
  }
}

const supabaseService = new Supabase();
export default supabaseService;
