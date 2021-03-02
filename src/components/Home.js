import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { withAlert } from "react-alert";
import Cards from "./products/Products";
import Cart from "./cart/Cart"
import {
  getProductList,
} from "../redux/actions/auth";
const Home = (props) => {
  let [update, setUpdate] = useState(0);
  let [page, setPage] = useState('products');

  useEffect(() => {
    props.getProductList();
  }, []);

  function changePage() {
    if (page == 'products') setPage('checkout');
    else setPage('products');
  }

  return <>
    {props.isProductLoading ?
      'Loading...'
      :
      <div>
        <div className="checkout_button">
          <button className="btn btn-large btn-outline-secondary mb-2 mt-3" onClick={changePage}>{page == 'products' ? 'Checkout' : 'Back'} </button>
        </div>
        <div style={{ textAlign: 'center' }}>
          {(page == 'products')
            ?
            <Cards /> :
            <Cart />
          }

        </div>
      </div>
    }
  </>;
}

const mapStateToProps = state => ({
  isProductLoading: state.auth.isProductLoading,
  localProductList: state.auth.localProductList
});

const mapDispatchToProps = dispatch => ({
  getProductList: data => dispatch(getProductList(data)),
});
export default compose(
  withAlert(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);