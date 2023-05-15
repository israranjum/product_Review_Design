import { Col, Row, Avatar, Space, Rate } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

const CustomerReviewCard = (props) => {
  return (
    <div>
      <div className="review_Comment_container">
        <Row>
          <Col flex={1}>
            <Row>
              <Col xs={3} sm={3} xl={2}>
                <div className="review_avatar">
                  <Space direction="vertical" size={16}>
                    <Space wrap size={16}>
                      <Avatar
                        size="large"
                        className="avatar"
                        icon={<UserOutlined />}
                      />
                    </Space>
                  </Space>
                </div>
              </Col>
              <Col xs={18} sm={18} md={18} lg={18} xl={20}>
                <div className="review_data_content">
                  <p>{props.data.username}</p>
                  <span>
                    <Rate
                      // onChange={setValue}
                      value={props.data.rating}
                      disabled
                      className="starRatingDesign_pageui"
                    />
                  </span>

                  {/* Rating Star End */}

                  <p>{props.data.date}</p>
                  <p className="review-data-desc">{props.data.description}</p>
                  <p className="review-data-desc">{props.data.review}</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
