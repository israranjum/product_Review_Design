"use client";
import React, { useState } from "react";
import "./productRatingUi.css";
import { Layout } from "antd";
import CustomersReviewsList from "./UserReviewUI/CustomersReviewsList";
import CustomerReviewHeader from "./CustomerReviewHeader";

const ProductRatingUi = () => {
  const [filteredReviews, setFilteredReviews] = useState([]);

  return (
    <main>
      <Layout>
        <div className="mainProductRating">
          <CustomerReviewHeader setFilteredReviews={setFilteredReviews} />
          <CustomersReviewsList filteredReviews={filteredReviews} />
        </div>
      </Layout>
    </main>
  );
};

export default ProductRatingUi;
