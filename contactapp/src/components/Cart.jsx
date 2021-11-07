import React,{useState} from 'react'

function Cart() {
    let [cart,setCart]=useState({
        product_item:"Android phone",
        qty:1,
        price:9000,
        image:"https://rukminim1.flixcart.com/image/312/312/ksnjp8w0/mobile/h/u/u/c21y-rmx3261-realme-original-imag65kcafgjqknz.jpeg?q=70"
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-dark table-hover dg-dark">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>{cart.product_item}</td>
                                    <td><img src={cart.image} alt="" height="150px"/></td>
                                    <td>{cart.price}</td>
                                    <td>
                                        <i className="fas fa-minus-circle" onClick={()=>{setCart({...cart,qty:cart.qty-1})}
                                    } />
                                        {cart.qty}
                                        <i className="fas fa-plus-circle" onClick={()=>{setCart({...cart,qty:cart.qty+1})}}/>
                                    </td>
                                    <td>{cart.price * cart.qty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
             
            </div>  
        </>
    )
}

export default Cart;
