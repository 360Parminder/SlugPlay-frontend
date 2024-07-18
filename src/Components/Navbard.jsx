import React from 'react'
import { IonIcon } from '@ionic/react';
const Navbard = () => {
  return (
    <div className=' h-16 w-screen bg-black flex row text-slate-200 justify-between px-10 items-center'>
        <div><p>logo</p></div>
        <div className=' w-1/3 flex py-1 px-3 bg-slate-600 rounded-3xl justify-between '>
           <button>Movie</button>
           <button>Series</button>
           <button>Originals</button>
           <button>
            <IonIcon name='cafe-outline' color='#fff' size='20'/>
           </button>
            
            </div>
        <div><p>profile</p></div>
    </div>
  )
}

export default Navbard