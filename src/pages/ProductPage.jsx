import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  console.log(id);

  return <div className="text-white  bg-white min-h-screen">ProductPage</div>;
}

export default ProductPage;
