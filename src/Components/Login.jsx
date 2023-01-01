import React from 'react'
import '../Components/login.css'
import img from '../assets/images/account-img.png'
const Login = () => {
  return (
    <>

  <div className='bg-stone-100  flex justify-center	  w-full nncc ' >
      
      <div   className='bg-white mt-6  rounded-3xl  w-7/12	 flex	 '>


<div className=' pt-8 pl-8 w-2/4	  	' >


      <img src={img} alt="" />
</div>

{/* Second Div */}
<div   className='w-2/4	 pt-8  '>

    <h1 className='text-2xl' > Signup</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis animi ab quaerat. Sint adipisci odio placeat doloremque quasi vitae aut consequatur, et fugiat ut nemo aperiam nesciunt ipsam maxime quo.</p>
<div className="inner">
    <input type="text" require required/>
           <input placeholder='Full Name' className='mb-8 mx-12  py-2 rounded-xl	 border border-black' type="email" require required/>
           <input placeholder='Email Address' className=' mb-8 mx-12  py-2 rounded-xl  border border-black' type="password" require required/>
           <input  placeholder='Create Password' className='mb-8 mx-12  py-2 rounded-xl border border-black' type="password" require required/>
           <input  placeholder='Re-type  Password' className='mb-8 mx-12  py-2 rounded-xl border border-black' type="password" require required/>
           </div>
           <p>Remember me </p>  <p class="forgeted-password"><a href="#"> Forgot Password?</a>.</p>
           <div class="button step_1"> <button class="bg-black  text-2xl text-white px-10 py-2 rounded-xl ">CREATE ACCOUNT</button> </div>
</div>


      </div>
        </div>





        
    </>
  )
}

export default Login