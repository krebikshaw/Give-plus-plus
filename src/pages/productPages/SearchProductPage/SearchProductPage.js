import React from "react";
import { Navbar } from "../../../components";
import { StandardNavPage } from "../../../components/Page";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import useProduct from "../../../hooks/productHooks/useProduct";

const SearchProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    products,
    setProducts,
    productErrorMessage,
    handleGetProductsFromVendor,
  } = useProduct();
  return (
    <>
      <Navbar />
      <StandardNavPage>
        <div>SearchProductPage</div>
      </StandardNavPage>
    </>
  );
};

export default SearchProductPage;
