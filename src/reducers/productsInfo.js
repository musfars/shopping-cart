const init = [
    {
      id: 1,
      name: 'Motorola Moto G4 Plus',
      price:15000,
      quantity:10
    },
    {
      id: 2,
      name: 'Asus Powerbank 10000 mAh',
      price:1500,
      quantity:8
    },
    {
      id: 3,
      name: 'SanDisk 16Gb Memory Card',
      price:800,
      quantity:3
    },
    {
      id: 4,
      name: 'WD External Hard Disk 1TB',
      price:5500,
      quantity:6
    }
  ];
  
  export default function(state= init, action){
    switch(action.type){
      case "ADD_TO_CART":
      {
        var newState = [...state];
        for(let i in newState){
          if(newState[i].id === action.payload.id){
            newState[i].quantity--;
          }
        }
        return newState;
      }
      default:return state;
    }
  }
