import React from 'react';

const CartItem=(props)=> {
   
   const {price,title,qty}=props.product;
        return (
          <div className="cart-item">
           <div className="left-block">
                  <img style={style.image} src={props.product.img}/>
           </div>
           <div className="right-block">
        <div style={{fontSize:25}}>{title}</div>
        <div style={{color:'#777'}}>{price}</div>
           <div style={{color:'#777'}}>Qty:{qty}</div>
           <div className="cart-item-actions">

             <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" onClick={()=>props.onIncreaseQuantity(props.product)}/>
             <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992683.svg" onClick={()=>props.onDecreaseQuantity(props.product)}/>
             <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" onClick={()=>props.onDeleteProduct(props.product.id)}/>
           </div>
           </div>
          </div>
        );
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