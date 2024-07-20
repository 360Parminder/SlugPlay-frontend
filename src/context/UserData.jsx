import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'



export const userDataContext = createContext()


export const UserDataProvider = ({children}) => {
    const [userData,setUserData]=useState('Parminder')
    const [userToken,setUserToken]=useState('')
    useEffect(() => {
     
        try {
            const response = axios.get('/Profile')
            if (response.status==200) {
                setUserData(response.data)
            }

        } catch (error) {
            
        }

    }, [])

    // useEffect(()=>{

    // },[])
    

return(
<userDataContext.Provider value={{userData}}>
    {children}
</userDataContext.Provider>
)


}



