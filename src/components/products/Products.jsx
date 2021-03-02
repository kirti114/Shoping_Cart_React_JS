import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { withAlert } from "react-alert";
import Card from "../card/Card"
import {
  getProductList,
  updateProductList
} from "../../redux/actions/auth";

const Products = (props) => {
  let [update, setUpdate] = useState(0);

  function update_card(index, value) {
    let array = props.localProductList;
    array[index].added = value;
    array[index].quantity = 1;
    props.updateProductList(array);
    setUpdate(Math.random());
  };

  return <>
    <div>
      {props.localProductList.map((product, index) => {
        return <Card product={product} index={index} update_card={update_card} />
      })
      }
    </div>
  </>;
}

const mapStateToProps = state => ({
  isProductLoading: state.auth.isProductLoading,
  localProductList: state.auth.localProductList
});

const mapDispatchToProps = dispatch => ({
  getProductList: data => dispatch(getProductList(data)),
  updateProductList: data => dispatch(updateProductList(data)),
});
export default compose(
  withAlert(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Products);