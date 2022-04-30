

 	import { Component } from 'react';
     import './product.css';
 
 
     class product extends Component {
     state = {
         count: 0,
         productName: 'laptop'
         }
         render() {

         return (
 
             <>
 
                 <span className="m-2 text-info">{this.state.productName}</span>
                 <span className="m-2 badge bg-primary">{this.format()}</span>
                 <button onClick={this.decrement} className="m-2 btn btn-sm btn-success">+</button>
                 <button onClick={this.increment} className="m-2 btn btn-sm btn-warning">-</button>
                 <button onClick={this.delete} className="m-2 btn btn-sm btn-danger">delete</button>
 
             </>
         );
     }
 
     decrement = () => 
     this.setState({count:this.state.count+1})
 
 
 
     increment = () =>
     this.setState({count:this.state.count-1})
 
 
     delete = () => {

        this.setState({count:this.state.count=== 0})
            
        }
            
 
 
 
     format(){
         if (this.state.count === 0) {
             return ('zero')
 
         } else {
             return this.state.count;
         }
     }
 
 }
 
 export default product;