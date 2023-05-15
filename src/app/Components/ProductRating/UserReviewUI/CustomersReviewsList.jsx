import React from "react";
import CustomerReviewCard from "./CustomerReviewCard";
import { Col, Row } from "antd";

const CustomersReviewsList = ({ filteredReviews }) => {
  return (
    <div>
      <Row>
        <Col>
          <div>
            {filteredReviews.map((data, index) => {
              return <CustomerReviewCard data={data} key={index} />;
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CustomersReviewsList;
