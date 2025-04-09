import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {getImgUrl} from "../utils/getImg";
import {useDispatch} from 'react-redux';
import {deleteItem , clearAllItems} from '../redux/features/cart/cartSlice'

const Cart = () => {

  const items = useSelector(state => state);

  const totalPrice = items.cart.cartItems.reduce((a , b) => a + b.newPrice , 0).toFixed(2);
  const dispatch = useDispatch();

  return (
    <>
        <div className="flex mt-12  flex-col overflow-hidden bg-white border shadow-xl">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <div className="text-lg font-medium text-gray-900">Shopping cart</div>
              <div className="ml-3 flex h-7 items-center ">
                <button type="button" 
                onClick={(e) => dispatch(clearAllItems())}
                className="relative -m-2 py-1 px-2 bg-red-500 text-white rounded-md hover:bg-secondary transition-all duration-200  ">
                  <span className="">Clear Cart</span>
                </button>
              </div>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                {
                  items.cart.cartItems.length > 0 ? (
                    <ul role="list" className="-my-6 divide-y divide-gray-200">

                  {
                    items.cart.cartItems.map((item) => (
                      <li key={item._id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img alt="" src={`${getImgUrl(item)}`} className="h-full w-full object-cover object-center" />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                              <h3>
                                <Link to='/'>{item.title}</Link>
                              </h3>
                              <p className="sm:ml-4">${item.newPrice}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 capitalize"><strong>Category:</strong>{item.category}</p>
                          </div>
                          <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
                            <p className="text-gray-500"><strong>Qty:</strong> 1</p>

                            <div className="flex">
                              <button 
                              onClick={(e) => dispatch(deleteItem({_id : item._id}))}
                                className="font-medium text-indigo-600 hover:text-indigo-500">
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  }


                  
                </ul>
                  ): (
                    <p>No records found</p>
                  )
                }
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
              <Link to="/checkout" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <Link to="/"> or <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">
                Continue Shopping <span aria-hidden="true"> &rarr;</span> </button>
              </Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Cart