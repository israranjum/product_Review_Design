"use client";
import { Col, Row, Rate, Button } from "antd";
import "./productRatingUi.css";
import React, { useState, useEffect } from "react";
import Reviews from "./Review";

const CustomerReviewHeader = ({ setFilteredReviews }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleFilterClick = (rating) => {
    setSelectedRating(rating);
  };
  useEffect(() => {
    if (selectedRating === 0) {
      setFilteredReviews(Reviews);
    } else {
      const filtered = Reviews.filter(
        (review) => review.rating === selectedRating
      );
      setFilteredReviews(filtered);
    }
  }, [selectedRating]);

  const averageRating = () => {
    const totalRating = Reviews.reduce((acc, review) => {
      return acc + review.rating;
    }, 0);
    const average = totalRating / Reviews.length;
    return average.toFixed(1);
  };
  return (
    <Row>
      <Col flex={1}>
        <Row>
          <Col xs={20} sm={20} md={22} lg={24} xl={24}>
            <h2>Product Ratings</h2>
          </Col>
        </Row>
        <Row>
          <div className="box-DesignRating">
            <Col xs={8} sm={8} md={6} lg={6} xl={6}>
              <div className="box-design-inside">
                <p className="heading_review">
                  <span style={{ fontWeight: "bolder", fontSize: "x-large" }}>
                    {averageRating()}
                  </span>
                  <span style={{ fontSize: "large" }}>&nbsp; out of 5</span>
                </p>
                <Rate
                  // onChange={setValue}
                  value={averageRating()}
                  disabled
                  className="starRatingDesign_pageui"
                />
              </div>
            </Col>
            <Col xs={16} sm={16} md={18} lg={16} xl={18}>
              <div className="review_button">
                <Button
                  type="default"
                  className="review_button_design"
                  onClick={() => handleFilterClick(0)}
                >
                  All
                </Button>
                {[...Array(5)].map((star, i) => {
                  const rating = i + 1;
                  return (
                    <Button
                      key={rating}
                      className="review_button_design"
                      onClick={() => handleFilterClick(rating)}
                    >
                      {rating} {rating === 1 ? "star" : "stars"}
                    </Button>
                  );
                })}
              </div>
            </Col>
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default CustomerReviewHeader;
