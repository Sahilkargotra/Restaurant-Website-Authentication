// eslint-disable-next-line no-unused-vars
import { Link, Navigate,useParams} from "react-router-dom";
import { UserContext } from "../UserContext"
import { useContext, useState } from "react"
import axios from "axios";
export default function AccountPage(){
    const [redirect,setRedirect] = useState(null);
    const {ready,user} = useContext(UserContext);
    let {subpage} = useParams;
    if(subpage === undefined ){
        subpage = 'profile';
    }
    async function logout()
    {
        await axios.post('/logout');
        setRedirect('/')
    }
    if(!ready){
        return 'Loading....';
    }

    if( ready && !user)
    {
        return <Navigate to = {'/login'}/>
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    
    
    //console.log(subpage);
    // eslint-disable-next-line no-unused-vars
    function linkClasses(type = null){
   let classes =  'py-2 px-6';
   if(type === subpage){
     classes+= ' bg-primary text-white rounded-full';
   }
   return classes;
    }
if(redirect){
    return <Navigate to = {redirect} />
}

    return (
        <div>
            {/* <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
                <Link className={linkClasses('profile')} to = {'/account'}> My profile</Link>
                <Link className={linkClasses('bookings')} to = {'/account/bookings'}> My Bookings</Link>
                <Link className = {linkClasses('places')} to = {'/account/places'}> My accomodations</Link> 
            </nav> */}
            {subpage ==='profile' && (
                <div className="text-center max-w lg mx-auto">
                  Logged in as {user.name} ({user.email}) <br />
                  <button onClick ={logout} className = "primary max-w-sm mt-2" >Logout</button>
                </div>
            )}
             </div>
    )
}