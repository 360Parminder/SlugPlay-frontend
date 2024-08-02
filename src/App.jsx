import React from 'react'
import HomePage from './Pages/HomePage'
import '@ionic/react/css/core.css';
import { setupIonicReact } from '@ionic/react';
import { UserDataProvider } from './context/UserData';
import Profile from './Pages/Profile';
import VideoPlayer from './Pages/VideoPlayer';
import Navbard from './Components/Navbard';
import VideoDetail from './Pages/VideoDetail';
import Register from './Pages/Register';
setupIonicReact();
 const App=()=> {

  return (
<>
{/* <Register/> */}
{/* <VideoPlayer/> */}
{/* <VideoDetail/> */}
<Profile/>
</>
  )
}
export default App
