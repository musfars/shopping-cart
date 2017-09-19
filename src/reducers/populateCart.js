const initialCartListState = []

// export default function(state=initialCartListState,action){
//   switch(action.type){
//     case "ADD_TO_CART":
//     return state.concat(action.payload);
//     case "CHECKOUT":return [...state];
//     default:return initialCartListState;
//   }
// }

export default function(state=initialCartListState,action){
switch(action.type){
case "ADD_TO_CART":
var newState=[...state];
var a=false;
for(var i=0;i<newState.length;i++){
  if(newState[i].productId===action.payload.productId){
    newState[i].quantity++;
    a=true;
  }
}
if(!a){
  newState=newState.concat(
  { productId:action.payload.productId,name:action.payload.name,price:action.payload.price,quantity:1}
  );
}
return newState;
default:return state;
}
} 