import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'


export default class EstimatedTotal extends Component {
  render() {
    return (
      <div>
        <Row>
            <Col md={6}><h2>Estmated Total</h2></Col>
            <Col md={6}>{`$${this.props.price}`}</Col>
        </Row>
      </div>
    )
  }
}
