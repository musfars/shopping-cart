const priceFilter=function(items,from,to){
  return{
    type:"PRICE_FILTER",
    items,
    from:parseInt(from,10),
    to:parseInt(to,10)
  };
}

export default priceFilter;