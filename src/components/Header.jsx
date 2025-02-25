import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {
  const dispatch = useDispatch()
const useCart = useSelector(state=>state.cartReducer)

  const userWishlist = useSelector(state=>state.wishlistReducer)
  return (
    <nav className='flex bg-violet-600 fixed w-full p-5 text-white'>
        <Link className='text-2xl font-bold' to={'/'}><i className ='fa-solid fa-truck-fast me-1'></i>E Cart</Link>
        <ul className='flex-1 text-right'>

        { insideHome &&
          <li className='list-none inline-block px-5'><input onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))}
           style={{width:'300px'}} className='rounded p-2 text-black'  type='text' placeholder='Search Products here...'></input></li>
        }

        <li className='list-none inline-block px-5'><Link to={'/wishlist'}><i className='fa-solid fa-heart me-1 text-red-600'>
        </i>Wish List <span className='bg-black text-white rounded  p-1'>{userWishlist?.length}</span></Link></li>

        <li className='list-none inline-block px-5'><Link to={'/cart'}><i className='fa-solid fa-heart me-1 text-green-600'>
        </i>Cart<span className='bg-black text-white rounded ms-1 p-1'>{useCart?.length}</span></Link></li>
    </ul>
    </nav>
  )
}

export default Header