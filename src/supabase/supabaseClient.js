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
      return await this.supabase.from("PokemonData").select("data");
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

  async userLogin(data) {
    try {
      return await this.supabase.auth.signInWithPassword(data);
    } catch (error) {
      console.log("Supabase Service :: userLogin :: error ", error);
    }
  }

  async userSignup(data) {
    try {
      return await this.supabase.auth.signUp(data);
    } catch (error) {
      console.log("Supabase Service :: userSignup :: error", error);
    }
  }

  async getUser() {
    try {
      return await this.supabase.auth.getUser();
    } catch (error) {
      console.log("Superbase Service :: getUser :: error ", error);
    }
  }
}

const supabaseService = new Supabase();
export default supabaseService;
