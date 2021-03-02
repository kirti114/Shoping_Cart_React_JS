import React from 'react';

const Card = (props) => {
    return <>
        <div className="card_wrapper">
            <div className="card_container">
                <div className="top"
                    style={{ background: `url(${props.product.image}) no-repeat center center` }}
                ></div>
                <div className={`bottom ${(props.product.added == true) ? " clicked " : " "}`}>
                    <div className="left">
                        <div className="details">
                            <h6>{props.product.title.substr(0, 24)}</h6>
                            <p>₹ {props.product.price}</p>
                        </div>
                        <div className="buy" onClick={() => props.update_card(props.index, true)}><i className="material-icons">add_shopping_cart</i></div>
                    </div>
                    <div className="right">
                        <div className="done"><i className="material-icons">done</i></div>
                        <div className="details">
                            <h6>{props.product.title.substr(0, 11)} ...</h6>
                            <p>₹ {props.product.price}</p>
                        </div>
                        <div className="remove" onClick={() => props.update_card(props.index, false)}><i className="material-icons">clear</i></div>
                    </div>
                </div>
            </div>
            <div className="inside">
                <div className="icon"><i className="material-icons">info_outline</i></div>
                <div className="contents">
                    <h5>{props.product.title}</h5>
                    <div>
                        {props.product.description}
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Card;