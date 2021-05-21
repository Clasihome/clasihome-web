import React, { Fragment } from 'react';
import Container from '../../../_components/container';
import { Col, Row, Avatar, Card } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { v1 as uuid } from 'uuid';
import './index.less';
import REVIEWS from '../../../_constants/REVIEWS.json';

const Review = ({ review, avatar, name, position })=> (
  <Card
    bordered
    className="review-card"
  >
    <img src="/reviews/quote.svg" alt="" className="quote-img" />
    <p className="review">
      {review}
    </p>
    <Card.Meta
      title={name}
      avatar={<Avatar size={100} src={avatar} alt={name} />}
      description={
        <Fragment>
          <p style={{ margin: 0 }} className="review-position">
            {position}
          </p>
          {
            Array(5).fill(0).map(item => <StarFilled style={{ color: "gold" }} />)
          }
        </Fragment>
      }
    />
  </Card>  
)

export default ()=> {

  return(
    <section className="customers-reviews-main">
      <Container>
        <Row gutter={45}>
          <Col xs={24}>
            <br />
          </Col>
          {
            REVIEWS.map(item => (
              <Col xs={24} lg={12} xl={8} key={uuid()}>
                <Review {...item} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}