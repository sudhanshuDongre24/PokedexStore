import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { changeTheme } from "../store/themeSlice";

function ProductPage() {
  const { id } = useParams();

  return <div className="text-white  bg-white min-h-screen">ProductPage</div>;
}

export default ProductPage;
