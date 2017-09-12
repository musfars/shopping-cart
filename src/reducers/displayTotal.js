const initialTotal = []

export default function(state=initialTotal,action){
  switch(action.type){
    case "CHECKOUT":
    return state.concat('Please pay ' + action.payload)
    default:return initialTotal;
  }
}