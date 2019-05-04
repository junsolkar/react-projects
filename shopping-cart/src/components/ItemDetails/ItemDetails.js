import React, { Component } from 'react'
import { Button, Collapse, Media, Col, Row } from 'react-bootstrap'


export default class ItemDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            open:false
        };
    }
  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
        {this.state.open ? 'Hide ' : 'Open '}item details
        {this.state.open ? ' -' : ' +'}
        </Button>
        <Collapse in={this.state.open}>
          <div>
              <Media className="media-image">
                  <img 
                  width={100}
                  height={100}
                  alt="thumbnail"
                  src="http://www.skywatches.com.sg/reviews/media/catalog/product/cache/1/image/1100x1100/9df78eab33525d08d6e5fb8d27136e95/s/u/sur055_3_2.jpg"
                  />
              <Media.Body>
                  <p>Seiko 100m diver watch</p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>{`$${this.props.price}`}</strong>
                      <br />
                      <strong className="price-stike">{`$${this.props.price}`}</strong>
                    </Col>
                    <Col md={6}> Qty : 1</Col>
                  </Row>
              </Media.Body>
              </Media>
          </div>
        </Collapse>
      </div>
    )
  }
}
