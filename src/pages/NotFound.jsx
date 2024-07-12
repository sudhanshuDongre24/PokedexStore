import React from "react";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="text-white flex flex-col gap-5 items-center justify-center min-h-screen">
      <h3>Page Does Not Exist</h3>
      <Button onClick={() => navigate("/")} className="text-white">
        Return Back to Home Page
      </Button>
    </div>
  );
}

export default NotFound;
