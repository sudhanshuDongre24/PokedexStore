import React, { useEffect } from "react";
import supabase from "./supabase/supabaseClient";

function App() {
  useEffect(() => {
    supabase
      .from("clients")
      .select("*")
      .then((res) => console.log(res));
  }, []);

  return <div>App</div>;
}

export default App;
