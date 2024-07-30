import React from 'react'
import '../Css/form.css'
import { IonIcon } from "@ionic/react";
import { pause, play,arrowForward } from "ionicons/icons";

const Register = () => {
  return (
    <>
      <div className=' w-screen h-screen flex flex-row bg-[#2c2738] text-[#fff]'>
        <div className='w-2/4 h-full p-10'>
          <div className='w-full h-full rounded-2xl bgImage' >
                <div className='w-full flex justify-end'>
                  <button className='flex items-center'>
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
                <input type="text" className='inputs bg-[#3b364c]' placeholder='First Name' />
                <input type="text" className='inputs bg-[#3b364c]' placeholder='Last Name' />
              </div>
              <input type='email' placeholder='Email' className='inputs bg-[#3b364c]' />
              <input type='password' placeholder='Enter your Password' className='inputs bg-[#3b364c]' />
              <label htmlFor="terms" className='flex flex-row gap-2 mt-2'>
                <input type="checkbox" name="" placeholder='' id="terms" className='' />
                I agree to the <p className='text-[#7b53ea] underline'>Terms & Conditions</p>
              </label>
              <button className='bg-[#6e54b6] rounded-md py-3 mt-10'>Create Account</button>
            </div>
            <div className='flex flex-row justify-between px-10 mt-10'>
              <button className='flex items-center gap-3 border border-white rounded px-8 py-2'>
                <img  src="../assets/images/search.png" alt="Google" />
                Google
              </button>
              <button className='flex items-center gap-3 border border-white rounded px-8 py-2'>
                <img src="../assets/images/search.png" alt="Apple" />
                Apple
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Register