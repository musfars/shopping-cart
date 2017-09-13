import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-materialize';
import priceFilter from '../actions/priceFilter';
import '../App.css'
class FilterContent extends Component{
  constructor(){
    super();
    this.fromValue=0;
    this.toValue=100000;
    this.setFrom=this.setFrom.bind(this);
    this.getFrom=this.getFrom.bind(this);
    this.setTo=this.setTo.bind(this);
    this.getTo=this.getTo.bind(this);    
  }

  setFrom(e){
    if(e.target.value!="")
      this.fromValue=e.target.value;
    else
      this.fromValue=0;
  }

  getFrom(){
    return this.fromValue;
  }

  setTo(e){
    if(e.target.value!="")
      this.toValue=e.target.value;
    else
      this.toValue=100000;
  }
  getTo(){
    
    return this.toValue; 
  }

  render(){
    return(
      <div className="filter">
      <div className="filter-container">
      <label>Min</label>
      <input type="number" defaultValue="0" min="0" max="100000" step="100"  onChange={this.setFrom}/>
      <label>Max</label>            
      <input type="number" defaultValue="100000" min="0" max="100000" step="100" onChange={this.setTo}/>
      <Button waves='light' onClick={()=>this.props.priceFilter(this.props.items,this.getFrom(),this.getTo())}>Filter</Button>
      </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    priceFilter: (items,from,to) => {
      dispatch(priceFilter(items,from,to))
    }
}
}

const mapStateToProps = (state, ownProps) => {
  return {
    items:state.productsInfo  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterContent);
