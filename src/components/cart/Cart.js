import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { withAlert } from "react-alert";
import {
  getProductList,
  updateProductList
} from "../../redux/actions/auth";

const Cart = (props) => {
  let [update, setUpdate] = useState(0);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    let array = props.localProductList;
    for (let i = 0; i < array.length; i++) {
      if (array[i].added) sum += Number((Number(array[i].quantity) * Number(array[i].price)).toFixed(2))
    }
    if (sum) sum += 15;
    setTotal(sum);
  })

  function removeItem(index, value) {
    value = Number(value)
    let array = props.localProductList;
    if (!value) {
      array[index].added = false;
      array[index].quantity = 0;
    } else {
      array[index].quantity = value;
    }

    props.updateProductList(array);
    setUpdate(Math.random());
  };

  return <>
    <div className="main_cart">

      <div className="shopping-cart">

        <div className="column-labels pr-4">
          <label className="product-image">Image</label>
          <label className="product-details">Product</label>
          <label className="product-price">Price</label>
          <label className="product-quantity">Quantity</label>
          <label className="product-removal">Remove</label>
          <label className="product-line-price">Total</label>
        </div>
        <div className="selected_items">
          {props.localProductList.map((product, index) => {
            if (product.added)
              return <div className="product" key={index}>
                <div className="product-image">
                  <img src={product.image} />
                </div>
                <div className="product-details">
                  <h5 className="product-title">{product.title}</h5>
                  <p className="product-description">{product.description}</p>
                </div>
                <div className="product-price">₹ {product.price}</div>
                <div className="product-quantity">
                  <input type="number" value={product.quantity} onChange={(e) => removeItem(index, e.target.value)} />
                </div>
                <div className="product-removal">
                  <button className="remove-product" onClick={() => removeItem(index, 0)}>
                    Remove
      </button>
                </div>
                <div className="product-line-price">{((product.quantity || 1) * product.price).toFixed(2)}</div>
              </div>

          })}
        </div>

        <div className="totals">
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">15.00</div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value" id="cart-total">{Number(total.toFixed(2))}</div>
          </div>
        </div>

        <button className="checkout">Checkout</button>

      </div>
    </div>
  </>;
}

const mapStateToProps = state => ({
  isProductLoading: state.auth.isProductLoading,
  localProductList: state.auth.localProductList
});

const mapDispatchToProps = dispatch => ({
  updateProductList: data => dispatch(updateProductList(data)),
});
export default compose(
  withAlert(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Cart);