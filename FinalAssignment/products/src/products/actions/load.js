import productsApi from '../services/productsApi';

function loadProducts(){
    return function(dispatch){
        productsApi
            .getAll()
            .then(function(products){
                const action = { type: "INIT_PRODUCTS", payload: products };
                dispatch(action);
            });
    }
}

export default loadProducts;