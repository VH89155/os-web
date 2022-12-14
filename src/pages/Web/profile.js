import { useState } from "react";
import { useSelector } from "react-redux";
import ProfileAdress from "../../components/Web/profile/profileAdress"
import ProfileBank from "../../components/Web/profile/profileBank";
import Bought from "../../components/Web/profile/profileBought";
import ProfileEdit from "../../components/Web/profile/profileEdit";
import UpdatePass from "../../components/Web/profile/profileUpdatePass";

const Profile = () => {
    const [isProfile,setProfile] = useState(1);
    const profile = useSelector((state)=>state.auth?.login?.currentUser?.profile)
    console.log(profile)
    const routerProfile= (x)=>{
        setProfile(x);
    }
    const displayProfile = ()=>{
        if(isProfile===3){
            return <ProfileAdress profile={profile} />
        }
        if(isProfile===1){
            return <ProfileEdit profile={profile} />
        }
        if(isProfile===2){
            return <ProfileBank profile={profile} />
        }
        if(isProfile===4){
            return <UpdatePass profile={profile} />
        }
        if(isProfile===5){
            return <Bought profile={profile} />
        }
    }
    return ( 
    <div className="profile">
        <div className="khoangtrong_profile"></div>
        <div className=" container profile_form ">
            <div className="row ">
                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2    profile_left">
                    <div className="users-img-container">
                        <img className="user-img " src="http://www.gravatar.com/avatar/fabac475498dabc37e3c268c4d7334c5?s=325&r=g&d=mm" alt="oke">
                        </img>
                        <div className="name_user">
                            <h6>{profile?.fullName}</h6>
                        </div>
                    </div>

                    <div className="myProfile">
                        <div className="myProfile_top">
                            <i className="fa-regular fa-user" />
                            <p onClick={()=>{routerProfile(1)}}>T??i Kho???n C???a T??i</p>

                        </div>
                        <div className="myProfile_bottom">
                            <p onClick={()=>{routerProfile(1)}}>H??? S??</p>
                            <p onClick={()=>{routerProfile(2)}}>Ng??n H??ng</p>
                            <p onClick={()=>{routerProfile(3)}}>?????a ch???</p>
                            <p onClick={()=>{routerProfile(4)}}>?????i M???t Kh???u</p>
                        </div>
                        <div className="myProfile_top">
                        <i className="fa-sharp fa-solid fa-bag-shopping"></i>
                            <p onClick={()=>{routerProfile(5)}}>????n mua</p>
                        </div>
                    </div>
                </div>
                {
                   displayProfile() 
                }
            </div>
        </div>
    </div>
     );
}
 
export default Profile;