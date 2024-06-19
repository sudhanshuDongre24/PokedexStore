
import { useEffect } from "react";
import supabase from "./supabase/supabaseClient";
import "./App.css";
import { Header } from "./components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
