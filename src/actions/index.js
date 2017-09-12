const addToCart=function(item){
    return{
        type:"ADD_TO_CART",
        payload:item
    };
}

export default addToCart;