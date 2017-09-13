const priceFilter=function(items,from,to){
  return{
    type:"PRICE_FILTER",
    items,
    from:parseInt(from),
    to:parseInt(to)
  };
}

export default priceFilter;