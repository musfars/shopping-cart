const initialCartListState = []

export default function(state=initialCartListState,action){
  switch(action.type){
    case "ADD_TO_CART":
    return state.concat(action.payload)
    default:return initialCartListState;
  }
}