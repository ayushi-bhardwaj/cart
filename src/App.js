import React from 'react';
import CartItem from './CartItem'
import Cart from './Cart'
import Navbar from './Navbar'
import * as firebase from 'firebase'
class App extends React.Component{
 
  constructor () {
    super();
    this.state = {
      products: [],
      loading:true
    }
    this.db=firebase.firestore()
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  componentDidMount(){
  //  firebase
  //  .firestore()
  //  .collection('products')
  //  .get()
  //  .then((snapshot)=>{
       
  //      snapshot.docs.map((doc)=>{
  //        console.log(doc.data())
  //      });

  //      const products=snapshot.docs.map((doc)=>{
  //        const data=doc.data();
  //        data['id']=doc.id
  //        return data;
  //      })

  //      this.setState({
  //        products,
  //        loading:false
  //      })
  //  })
  this.db
    .collection('products')
    .where('price','==',900)
    .onSnapshot((snapshot)=>{
       
        snapshot.docs.map((doc)=>{
         console.log(doc.data())
        });

       const products=snapshot.docs.map((doc)=>{
          const data=doc.data();
          data['id']=doc.id
          return data;
        })

      this.setState({
         products,
          loading:false
        })
    })
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    // roducts[index].qty += 1;

    // this.setState({
    //   products
    // })p
    const docRef=this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty:products[index].qty+1
    })
    .then(()=>{
      console.log('Updated successfully')
    })
    .catch((err)=>{
         console.log(err)
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    // products[index].qty -= 1;

    // this.setState({
    //   products
     
    // })
    const docRef=this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty:products[index].qty-1
    })
    .then(()=>{
      console.log('Updated successfully')
    })
    .catch((err)=>{
         console.log(err)
    })

  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const docRef=this.db.collection('products').doc(id)

    docRef
      .delete()
      .then(()=>{
        console.log('Deleted successfully')
      })
      .catch((err)=>{
        console.log('Error',err)
      })
    
  }
  getCartCount =()=>{
    const {products}=this.state;
    let count=0;

     products.forEach((product)=>{
         count+=product.qty;  
     })


    return count;
  }
  getCartTotal=()=>{
    const {products}=this.state;
    let cartTotal=0;
    products.map((product)=>{
         cartTotal+=product.qty*product.price
    })

    return cartTotal;
  }
   
  addProduct=()=>{
    this.db
    .collection('products')
    .add({
      img:"",
      price:900,
      qty:3,
      title:'washing machine'

    })
    .then((docRef)=>{
        console.log(docRef)
    })
    .catch((err)=>{
          console.log(err)
    })
  }
  
 render (){
   const {products,loading}=this.state;
  return (
    <div className="App">
     <Navbar count={this.getCartCount()}/>
     {/*<button onClick={this.addProduct} style={{padding:20,fontSize:20}}>Add a product</button>*/}
      <Cart
      products={products} 
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
      />
      {loading&&<h1>Loading Products..</h1>}
      <div style={{fontSize:20 ,padding:10}}>
        TOTAL:{this.getCartTotal()}
      </div>
    </div>
  );
  }

}
export default App;
