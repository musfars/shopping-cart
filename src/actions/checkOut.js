const checkOut=function(item){
    return{
        type:"CHECKOUT",
        payload:item
    };
}

export default checkOut;