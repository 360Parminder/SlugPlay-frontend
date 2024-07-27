import React from 'react'

const Register = () => {
  return (
    <>
  <div className=' w-screen h-screen flex flex-row bg-[#2c2738] text-[#fff]'>
    <div className='w-2/4 h-full p-10'>
        <div className='bg-gray-700 w-full h-full rounded-2xl'>

        </div>
    </div>
    <div className='w-2/4 h-full p-10'>
            <div className='flex flex-col w-full'>
                <h3 className=' text-4xl font-semibold mb-4 w-full mt-14'>Create an account</h3>
                <div className='flex flex-row text-left gap-2'>
                <p>Already have an account ?</p>
                <button className=' underline text-[#7b53ea]'>Log in</button>
                </div>
                <div className='flex flex-col gap-5 mt-10 w-full' >
                    <div className='flex flex-row justify-between w-full' >
                        <input type="text" className='capitalize flex rounded text-xl ps-3 py-4 h-14 bg-[#3b364c] active:outline-none' placeholder='First Name'/>
                        <input type="text" className='capitalize flex rounded text-xl  ps-3 py-4 h-14 bg-[#3b364c]' placeholder='Last Name'/>
                    </div>
                    <input type='email' placeholder='Email' className=' rounded text-xl ps-3 py-4 h-14 bg-[#3b364c]'  />
                    <input type='password' placeholder='Password' className=' rounded text-xl ps-3 h-14 bg-[#3b364c]'   />
                    <label htmlFor="terms" className='flex flex-row gap-2 mt-2'>
                    <input type="checkbox" name="" placeholder='' id="terms" className=''  />
                        I agree to the <p className='text-[#7b53ea] underline'>Terms & Conditions</p>
                    </label>
                    <button className='bg-[#6e54b6] rounded-md py-3 mt-10'>Create Account</button>
                </div>
            </div>
    </div>
  </div>
    
    </>
  )
}

export default Register