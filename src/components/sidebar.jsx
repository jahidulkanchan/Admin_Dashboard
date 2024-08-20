// import React from 'react'
import { FaBox, FaCog, FaShoppingCart, FaTachometerAlt, FaUser, FaUsers } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-200 dark:border-gray-700 p-4 dark:bg-gray-900'>
      <h1 className='text-2xl mt-4 font-bold hidden md:block text-center dark:text-gray-200'>JK Shop</h1>
      <ul className='flex flex-col mt-5 text-xl'>
        <li className='flext items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
          <div className="item flex items-center gap-3 dark:text-gray-100">
          <FaTachometerAlt/>
          <span className='hidden md:inline '>Dashboard</span>
          </div>
        </li>
        <li className='flext items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
          <div className="item flex items-center gap-3 dark:text-gray-100">
          <FaShoppingCart/>
          <span className='hidden md:inline'>Orders</span>
          </div>
        </li>
        <li className='flext items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
          <div className="item flex items-center gap-3 dark:text-gray-100">
          <FaUsers/>
          <span className='hidden md:inline'>Customers</span>
          </div>
        </li>
        <li className='flext items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
          <div className="item flex items-center gap-3 dark:text-gray-100">
          <FaUser/>
          <span className='hidden md:inline'>User</span>
          </div>
        </li>
        <li className='flext items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
          <div className="item flex items-center gap-3 dark:text-gray-100">
          <FaBox/>
          <span className='hidden md:inline'>Products</span>
          </div>
        </li>
        <li className='flext items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
          <div className="item flex items-center gap-3 dark:text-gray-100">
          <FaCog/>
          <span className='hidden md:inline'>Settings</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar