import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxFees from './components/TaxFees/TaxFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails  from './components/ItemDetails/ItemDetails';
import PromoCode from './components/PromoCode/PromoCode';
import './App.css';

import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 200.0,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    };
  }

  componentDidMount = () => {
    this.setState(
      { taxes: (this.state.total + this.state.pickupSavings) * 0.0875 },
    function(){
      this.setState({
        estimatedTotal:
          this.state.total + this.state.pickupSavings + this.state.taxes
      });
    }
    );
  };

  giveDiscountHandler = () => {
    if(this.props.promoCode === 'DISCOUNT'){
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      },
      function(){
        this.setState({
          disablePromoButton: true
        });
      }
      );
    }
  };
 
  render(){
    return (
      <div className="container">
        <Container className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings} />
          <TaxFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
          <hr />
          <PromoCode 
          giveDiscount={() => this.giveDiscountHandler()}
          isDisabled={this.state.disablePromoButton}
          />
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {handleChange})(App);
