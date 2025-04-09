import  { useState } from 'react'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';





const navigation = [
    {name : 'Dashboard' , href : '/dashboard'},
    {name : 'Orders' , href : '/orders'},
    {name : 'Cart Page' , href : '/cart'},
    {name : 'Check Out' , href : '/checkout'},
    {name : 'Logout' , href : '/checkout'}
]

const Header = () => {

    // eslint-disable-next-line no-unused-vars
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const [isDashboard , setIsDashboard] = useState(false);


    const items = useSelector(state => state);
    console.log(items);

  return (
    <header className='  py-6 mx-auto '>
        <nav className=' flex items-center justify-between px-4 sm:space-x-6 space-x-3'>
            {/* left part */}
            <div className='flex items-center md:gap-16 gap-4'>
                <Link to={"/"}>
                    <HiBars3CenterLeft  className='size-6'/>
                </Link>
                {/*  Search box  */}
                <div className=' space-x-2 sm:w-72 w-40 relative'>
                    <CiSearch className='absolute left-4 my-2' />
                    <input type='text' placeholder='Search here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md'></input>
                </div>
            </div>

            {/* right part */}
            <div className='relative flex items-center md:space-x-4 space-x-2 '>

                {
                    isLoggedIn ? 
                    <>
                        <button onClick={() => setIsDashboard(!isDashboard)}><FaRegCircleUser className='size-6'/></button>
                        {
                            isDashboard && ( 
                                <div className='absolute top-8 mt-2 z-40 shadow-lg wt-40 bg-white rounded-md'>
                                    <ul className=' py-2 '>
                                        {
                                            navigation.map((item) => (
                                                <li key={item.name} onClick={() => setIsDashboard(false)}>
                                                    <Link to={item.href} className='block text-sm px-4 py-2 hover:bg-gray-100'>{item.name}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div> 
                            )
                        }
                    </> : 
                    <Link to={"/login"}><CiUser  className='size-6'/></Link>
                }

                
                
                <button className='hidden sm:block'><CiHeart  className='size-6'/></button>
                <Link to={"/cart"} className='flex items-center gap-2 bg-primary p-1 sm:px-6 px-2 rounded-md'>
                    <FaCartShopping  className='size-6'/>
                    <span className='text-lg  sm:ml-1 '>{items.cart.cartItems.length}</span>
                </Link>
                
            </div>
        </nav>
    </header>
  ) 
}

export default Header;
