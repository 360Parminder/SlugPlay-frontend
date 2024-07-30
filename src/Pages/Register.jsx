import React from 'react'
import '../Css/form.css'
import { IonIcon } from "@ionic/react";
import { pause, play,arrowForward } from "ionicons/icons";

const Register = () => {
  const imagePath='../assets/images/bg3.jpg'
  return (
    <>
      <div className=' w-screen h-screen flex flex-row bg-[#2c2738] text-[#fff]'>
        <div className='w-2/4 h-full p-10'>
          <div className='w-full h-full rounded-2xl bgImage' >
                <div className='w-full flex justify-end'>
                  <button className='flex items-center px-3 py-1 bg-[#eaeaea25] rounded-2xl gap-1 mt-5 me-5 backdrop-blur-md'>
                    <p>Back to website</p>
                    <IonIcon icon={arrowForward}/>
                  </button>
                </div>
          </div>
        </div>
        <div className='w-2/4 h-full p-10'>
          <div className='flex flex-col w-full px-10'>
            <h3 className=' text-4xl font-semibold mb-4 w-full mt-14'>Create an account</h3>
            <div className='flex flex-row text-left gap-2'>
              <p>Already have an account ?</p>
              <button className=' underline text-[#7b53ea]'>Log in</button>
            </div>
            <div className='flex flex-col gap-5 mt-10 w-full' >
              <div className='flex flex-row justify-between w-full' >
                <input type="text" className='inputs bg-[#3b364c94]' placeholder='First Name' />
                <input type="text" className='inputs bg-[#3b364c94]' placeholder='Last Name' />
              </div>
              <input type='email' placeholder='Email' className='inputs bg-[#3b364c94]' />
              <input type='password' placeholder='Enter your Password' className='inputs bg-[#3b364c94]' />
              <label className='flex flex-row gap-2 mt-2 checkboxContainer'>
                <input type="checkbox" name="" placeholder='' id="terms" className=' ms-3' />
                <span className='checkmark'></span>
                I agree to the <p className='text-[#7b53ea] underline'>Terms & Conditions</p>
              </label>
              <button className='bg-[#6e54b6] rounded-md py-3 mt-5'>Create Account</button>
            </div>
            <div className='flex flex-row justify-center mt-5'>
                <span className='option font-thin'> Or register with</span>
            </div>
            <div className='flex flex-row justify-between w-full px-10 mt-10'>
              <button className='flex flex-row items-center gap-3 border border-white rounded px-8 py-2'>
                <img  src="/search.png" alt="Google" className='w-8 h-8' />
                <p>Google</p>
              </button>
              <button className='flex flex-row items-center gap-3 border border-white rounded px-8 py-2'>
                <img src='/apple.png' alt="Apple" className='w-8 h-8' />
               <p> Apple</p>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Register