const fetchData=function(item){
  return{
      type:"FETCH_DATA",
      payload:item
  };
}

export default fetchData;
