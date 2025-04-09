import React  from 'react'
import { FaCartShopping } from "react-icons/fa6";
import {getImgUrl} from "../utils/getImg";
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/features/cart/cartSlice';




{/***

const BookCard = ({book}) => {

    return (
    <div>
        <div>
            <a className='w-full sm:w-1/2'>
                <img src={`${getImgUrl(book)}`} className=''></img>
            </a>
        </div>
    </div>
    )
}

*/}










const BookCard = ({book}) => {


    const dispatch = useDispatch();

  return (
    
    <div className=" rounded-lg transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
            <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
                <Link to="/">
                    <img src={`${getImgUrl(book)}`} alt="" className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"/>
                </Link>
            </div>

            <div>
                <Link to={`../pages/books/${book._id}`}>
                    <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                        {book.title}
                    </h3>
                </Link>
                <p className="text-gray-600 mb-5">{book.description.length > 70 ? `${book.description.slice(0 ,70)}...` : book.description}</p>
                <p className="font-medium mb-5">${book.newPrice} <span className="line-through font-normal ml-2">${book.oldPrice}</span></p>
                <button className="btn-primary px-6 space-x-1 flex items-center gap-1 " onClick={(e) => dispatch(addItem({
                    "_id": book._id,
                    "title": book.title,
                    "description": book.description,
                    "category": book.category,
                    "trending": book.trending,
                    "coverImage": book.coverImage,
                    "oldPrice": book.oldPrice,
                    "newPrice": book.newPrice
                })) }>
                    <FaCartShopping className="" /><span>Add to Cart</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default BookCard;