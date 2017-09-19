const initialTotal = 0

export default function(state=initialTotal,action){
  switch(action.type){
    case "CHECKOUT":{
      var newState = [...state]
      newState += action.payload
      return newState
    }
    // return state.concat('Please pay ' + action.payload)

    default:return initialTotal;
  }
}