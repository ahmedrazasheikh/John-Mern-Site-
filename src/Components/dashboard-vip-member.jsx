import React from 'react'
import './dashboard-vip-member.css';
import '../App.css'
import logo from '../assets/images/admin.png'
const DashbordOrderAdmin = () => {
  return (
    <>
<div className="main flex flex-col ">

<div className="head flex flex-col  	 items-center	">
  <div className='flex  items-center'>
  <img src={logo} alt="" />
  <div className="ss flex flex-col">
  <h3  className='text-2xl'>John Carter</h3> 
  <h5 className='ali text-blue-600 ' >ADMIN</h5>
  </div>
  </div>
</div>


{/* Secod Part  */}

<div className="secondpart ml-60  flex items-center w-90  ">

    {/* <h3>From your account dashboard, you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</h3> */}
    <div className="navbar 	   border-2  border-red">
    <ul className='list-none flex flex-col text-xl '>
                  <li className='py-6 px-20 bg-black text-white ' ><a href="#">DASHBOARD</a></li>
                  <li className='py-6 ee' ><a href="#">MY REVIEW</a></li>
                  <li className='py-6   ee' ><a href="#">PAYMENT</a></li>
                  <li className='py-6  ee' ><a href="#">LOGOUT</a></li>
                </ul>
    </div>
    <div className="inner  flex flex-col   ">
    <span className='sssf max-w-80' >Hello! Mike Procic</span>
    <div  className='sssss'>

    <p className='oolol' >From your account dashboard, you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default DashbordOrderAdmin