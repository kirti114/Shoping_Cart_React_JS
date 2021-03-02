import apiConstants from "../constants/apiConstants";

const initialStateSchema = {
    isProductLoading: false,
    productList: [],
    localProductList: []
};

let initialState = initialStateSchema;
const localData = localStorage.getItem("authToken");
if (localData && localData !== undefined) {
    try {
        initialState.authToken = localData;
    } catch (e) {
        initialState = initialStateSchema;
    }
}

const productReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {

        case apiConstants.GET_PRODUCT_LISTS:
            newState = {
                ...state,
                isProductLoading: true,
                productList: [],
                localProductList: []
            };
            return newState;

        case apiConstants.GET_PRODUCT_LISTS_SUCCESS:
            newState = {
                ...state,
                isProductLoading: false,
                productList: action.response,
                localProductList: action.response,
            };
            return newState;

        case apiConstants.GET_PRODUCT_LISTS_FAIL:
            newState = {
                ...state,
                error: action.response.data,
                isProductLoading: false
            };
            return newState;

        case apiConstants.UPDATE_PRODUCT_LISTS_SUCCESS:
            newState = {
                ...state,
                localProductList: action.response,
            };
            return newState;


        default:
            return state;
    }
};

export default productReducer;
