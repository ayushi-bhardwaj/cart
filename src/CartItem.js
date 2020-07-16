import React from 'react';

class CartItem extends React.Component {
   
  
    render(){
        console.log(this.props)
        const {price,title,qty}=this.props.product;
        return (
          <div className="cart-item">
           <div className="left-block">
                  <img style={style.image}/>
           </div>
           <div className="right-block">
        <div style={{fontSize:25}}>{title}</div>
        <div style={{color:'#777'}}>{price}</div>
           <div style={{color:'#777'}}>Qty:{qty}</div>
           <div className="cart-item-actions">

             <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" onClick={()=>this.props.onIncreaseQuantity(this.props.product)}/>
             <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992683.svg" onClick={()=>this.props.onDecreaseQuantity(this.props.product)}/>
             <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" onClick={()=>this.props.onDeleteProduct(this.props.product.id)}/>
           </div>
           </div>
          </div>
        );
    }
}

const style={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem