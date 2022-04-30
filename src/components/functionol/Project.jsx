import { useState } from "react";
import '../product.css';


    function Product(){

    const [count,setCount] = useState(0);
   

        return(
        <>
        
        <span className="m-2 text-info">Product name</span>
        <span className="m-2 badge bg-primary">{format()}</span>
        <span className="m-2 badge bg-primary">{format()}</span>
        <button onClick={sum} className="m-2 btn btn-sm btn-success">+</button>
        <button onClick={manfi} className="m-2 btn btn-sm btn-warning">-</button>
        <button onClick={delet} className="m-2 btn btn-sm btn-danger">delete</button>      
        </>
            );
    
    function sum() {
      setCount(count +1)
    }

    function manfi(){
        setCount(count -1)
    }

    function delet(){
        setCount(count===0)
    }



   function format(){
        if(count===0){
            return 'zero'
        }else if(count===false){
            return 'zero'
        }else{
            return count
        }
    }
   




}

 export default Product;