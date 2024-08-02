import { useContext } from "react";
import { userDataContext } from "../context/UserData";

const Profile =()=>{
const userData = useContext(userDataContext)
console.log(userData);
return(
<>


</>
)
}


export default Profile;