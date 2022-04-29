

 	import { Component } from 'react';
     import './product.css'
 
 
     class product extends Component {
  15 =   state = {
         count: 0,
         productName: 'laptop'
         }
 
 
         render() {
 
 
         return (
 
             <>
 
                 <span className="m-2 text-info">{this.state.productName}</span>
                 <span className="m-2 badge bg-primary">{this.format(this.count)}</span>
                 <span className="m-2 badge bg-primary">{this.count === !0 ? 'zero' : 	this.count}</span>
                 <button onClick={this.decrement} className="m-2 btn btn-sm btn-success">+</button>
                 <button onClick={this.increment} className="m-2 btn btn-sm btn-warning">-</button>
                 <button onClick={this.delete} className="m-2 btn btn-sm btn-danger">delete</button>
 
             </>
         );
     }
 
     decrement = () => console.log('decrement');
 
 
 
     increment = () => console.log('incremnt');
 
 
 
     delete = () => console.log('delete');
 
 
 
 
  16=   format() {
         if (this.state.count === 0) {
             return ('zero')
 
         } else {
             return this.state.count;
         }
     }
 
 }
 
 export default product;