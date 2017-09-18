// const init = [
//     {
//       productId: 1,
//       name: 'Motorola Moto G4 Plus',
//       price:15000,
//       quantity:10
//     },
//     {
//       productId: 2,
//       name: 'Asus Powerbank 10000 mAh',
//       price:1500,
//       quantity:8
//     },
//     {
//       productId: 3,
//       name: 'SanDisk 16Gb Memory Card',
//       price:800,
//       quantity:3
//     },
//     {
//       productId: 4,
//       name: 'WD External Hard Disk 1TB',
//       price:5500,
//       quantity:6
//     }
//   ];

  export default function(state= [], action){

    switch(action.type){
      case "FETCH_DATA":
      {
        console.log(action.payload)
        var newState = [...state];
        newState = action.payload;
        return newState;
      }
      case "ADD_TO_CART":
      {
        newState = [...state];
        for(let i in newState){
          if(newState[i].productId === action.payload.productId){
            newState[i].quantity--;
          }
        }
        return newState;
      }
      default:return state;
    }
  }
