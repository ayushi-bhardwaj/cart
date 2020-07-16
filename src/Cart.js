import React from 'react';
import CartItem from './CartItem'
class Cart extends React.Component {
    constructor()
    {
        super();
        this.state={
           products:[
            {
                price:999,
                title:'Watch',
                qty:1,
                img:'',
                id:1
            },
            {
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:'',
            id:2
         },
         {
            price:1999,
            title:'nothing',
            qty:1,
            img:'',
            id:3
         }

           ]
        }
    }
    handleIncreaseQuantity=(product)=>{
       const {products}=this.state;
       const ind=products.indexOf(product);
       products[ind].qty+=1;
       this.setState({
           products
       })
    }
    handleDecreaseQuantity=(product)=>{
   const {products}=this.state;
   const ind=products.indexOf(product);
    if(products[ind].qty===0)
    {
        return;
    }
     products[ind].qty-=1;
    this.setState({
        products
    })

    }
    handleDeleteProduct=(id)=>{
        const {products}=this.state;
        const items=products.filter((item)=>item.id!==id)

        this.setState({
            products:items
        })
    }
    render(){
        const {products}=this.state
        return(
      
            <div className="cart">
               
               
                {products.map((product)=>{
                     return ( 
                     <CartItem  
                     key={product.id} 
                     product={product} 
                     onIncreaseQuantity={this.handleIncreaseQuantity}
                     onDecreaseQuantity={this.handleDecreaseQuantity}
                     onDeleteProduct={this.handleDeleteProduct}
                     />
                  )  })}

            </div>

        )
    }
}


export default Cart