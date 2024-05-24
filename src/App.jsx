import { useEffect } from "react";
import "./App.css";
import { Header } from "./components";
import { Outlet } from "react-router-dom";

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
