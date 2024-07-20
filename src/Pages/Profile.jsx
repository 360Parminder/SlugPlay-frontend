import { useContext } from "react";
import { userDataContext } from "../context/UserData";

const Profile =()=>{
const userData = useContext(userDataContext)
console.log(userData);
return(
<>
<h1>hello</h1>

</>
)
}


export default Profile;